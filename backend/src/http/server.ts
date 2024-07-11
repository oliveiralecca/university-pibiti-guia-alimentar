import fastify from 'fastify'

import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifyCors from '@fastify/cors'

import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod'
import { createUfsUser } from './routes/create-ufs-user'
import { createCourse } from './routes/create-course'
import { getCourses } from './routes/get-courses'
import { errorHandler } from './error-handler'
import { createSchoolUser } from './routes/create-school-user'
import { getStates } from './routes/get-states'

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'pibiti.guia',
      description: 'Especificações da API para o back-end da aplicação desenvolvida como projeto de Pibiti, junto ao Departamento de Nutrição (DNUT) da Universidade Federal de Sergipe (UFS).',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    tryItOutEnabled: false
  }
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createUfsUser)
app.register(createSchoolUser)
app.register(createCourse)
app.register(getCourses)
app.register(getStates)

app.setErrorHandler(errorHandler)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('HTTP server running!')
})
