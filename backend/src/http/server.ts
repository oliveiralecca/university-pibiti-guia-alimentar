import fastify from 'fastify'
import { createUser } from './routes/create-user'
import { createCourse } from './routes/create-course'
import { getCourses } from './routes/get-courses'

const app = fastify()

app.register(createUser)
app.register(createCourse)
app.register(getCourses)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
