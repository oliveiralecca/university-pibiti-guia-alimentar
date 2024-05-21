import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../libs/prisma'
import { type FastifyInstance } from 'fastify'

enum Answers {
  Incorrect,
  Correct,
}

interface Score {
  block: string
  correct: number
  total: number
}

type ScoreObject = Record<string, Score>

export async function createUser(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/users', {
      schema: {
        summary: 'Create an user',
        tags: ['users'],
        body: z.object({
          description: z.object({
            gender: z.string(),
            age: z.number().int(),
            course: z.string(),
            campus: z.string(),
            courseType: z.string(),
            firstCourse: z.string(),
            healthCourse: z.string().optional(),
            knowGuia: z.string(),
            opinionAbout: z.string()
          }),
          quiz: z.object({
            answers: z.array(z.object({
              block: z.string(),
              question: z.string(),
              answer: z.nativeEnum(Answers)
            })),
            result: z.string()
          })
        }),
        response: {
          201: z.object({
            userId: z.string()
          })
        }
      }
    }, async (request, reply) => {
      const { description, quiz } = request.body

      const answerByGroup = quiz.answers.reduce<ScoreObject>((acc, item) => {
        if (!acc[item.block]) {
          acc[item.block] = { block: item.block, correct: 0, total: 0 }
        }

        acc[item.block].total += 1

        if (item.answer === 1) {
          acc[item.block].correct += 1
        }

        return acc
      }, {})

      const score: Score[] = Object.values(answerByGroup)

      const user = await prisma.user.create({
        data: {
          description,
          quiz: {
            ...quiz,
            score
          }
        }
      })

      return await reply.status(201).send({ userId: user.id })
    })
}
