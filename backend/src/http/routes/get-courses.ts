import { type FastifyInstance } from 'fastify'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { prisma } from '../../libs/prisma'
import { BadRequest } from './_errors/bad-request'

export async function getCoursess(app: FastifyInstance) {
  app.get('/courses', async (_, reply) => {
    const courses = await prisma.course.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return await reply.status(200).send(courses)
  })
}

// COMMENT: NOVO
export async function getCourses(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .get('/courses', {
      schema: {
        summary: 'Get a course',
        tags: ['courses'],
        response: {
          200: z.array(z.object({
            id: z.string(),
            name: z.string()
          }))
        }
      }
    }, async (_, reply) => {
      const courses = await prisma.course.findMany({
        orderBy: {
          name: 'asc'
        }
      })

      if (courses === null) {
        throw new BadRequest('There are no courses registered.')
      }

      return await reply.status(200).send(courses)
    })
}
