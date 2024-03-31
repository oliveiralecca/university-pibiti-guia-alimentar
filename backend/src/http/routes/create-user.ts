import { z } from 'zod'
import { prisma } from '../../libs/prisma'
import { type FastifyInstance } from 'fastify'

export async function createUser(app: FastifyInstance) {
  app.post('/users', async (request, reply) => {
    const createUserBody = z.object({
      description: z.object({
        gender: z.string(),
        age: z.number(),
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
          answer: z.string()
        })),
        result: z.string()
      })
    })

    const { description, quiz } = createUserBody.parse(request.body)

    const user = await prisma.user.create({
      data: {
        description,
        quiz
      }
    })

    return await reply.status(201).send({ userId: user.id })
  })
}
