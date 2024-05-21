import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../libs/prisma'
import { type FastifyInstance } from 'fastify'
import { BadRequest } from './_errors/bad-request'

export async function createCourse(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .post('/courses', {
      schema: {
        summary: 'Create a course',
        tags: ['courses'],
        body: z.object({
          name: z.string()
        }),
        response: {
          201: z.object({
            courseId: z.string()
          })
        }
      }
    }, async (request, reply) => {
      const { name } = request.body

      const courseWithSameName = await prisma.course.findFirst({
        where: {
          name
        }
      })

      if (courseWithSameName !== null) {
        throw new BadRequest('Another course with the same name already exists.')
      }

      const course = await prisma.course.create({
        data: {
          name
        }
      })

      return await reply.status(201).send({ courseId: course.id })
    })
}
