import { type FastifyInstance } from 'fastify'
import fastifyHttpProxy from '@fastify/http-proxy'

export async function getStates(app: FastifyInstance) {
  app.register(fastifyHttpProxy, {
    upstream: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    prefix: '/states'
  })
}
