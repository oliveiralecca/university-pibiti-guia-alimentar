import { prisma } from '../../libs/prisma'
import { type FastifyInstance } from 'fastify'

export async function getCourses(app: FastifyInstance) {
  app.get('/courses', async (_, reply) => {
    const courses = await prisma.course.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return await reply.status(200).send(courses)
  })
}
