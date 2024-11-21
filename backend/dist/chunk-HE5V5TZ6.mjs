// src/http/routes/get-states.ts
import fastifyHttpProxy from "@fastify/http-proxy";
async function getStates(app) {
  app.register(fastifyHttpProxy, {
    upstream: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    prefix: "/states"
  });
}

export {
  getStates
};
