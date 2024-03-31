import fastify from 'fastify'
import { createUser } from './routes/create-user'
import { createCourse } from './routes/create-course'

const app = fastify()

app.register(createUser)
app.register(createCourse)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
