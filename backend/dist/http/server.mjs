import {
  errorHandler
} from "../chunk-P2EXYEDY.mjs";
import {
  createCourse
} from "../chunk-GU7CBVQW.mjs";
import {
  createSchoolUser
} from "../chunk-IOPEED7U.mjs";
import {
  createUfsUser
} from "../chunk-IK55JKVJ.mjs";
import "../chunk-33544KAL.mjs";
import {
  getCourses
} from "../chunk-OXL26RRV.mjs";
import "../chunk-HIRBKS32.mjs";
import "../chunk-PNMBIITM.mjs";
import {
  getStates
} from "../chunk-HE5V5TZ6.mjs";

// src/http/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pibiti.guia",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o desenvolvida como projeto de Pibiti, junto ao Departamento de Nutri\xE7\xE3o (DNUT) da Universidade Federal de Sergipe (UFS).",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    tryItOutEnabled: false
  }
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createUfsUser);
app.register(createSchoolUser);
app.register(createCourse);
app.register(getCourses);
app.register(getStates);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
