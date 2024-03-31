import { z } from 'zod'
import { prisma } from '../../libs/prisma'
import { type FastifyInstance } from 'fastify'

export async function createCourse(app: FastifyInstance) {
  app.post('/courses', async (request, reply) => {
    const createCourseBody = z.object({
      name: z.string()
    })

    const { name } = createCourseBody.parse(request.body)

    const course = await prisma.course.create({
      data: {
        name
      }
    })

    return await reply.status(201).send({ courseId: course.id })
  })
}
