import {
  BadRequest
} from "./chunk-HIRBKS32.mjs";
import {
  prisma
} from "./chunk-PNMBIITM.mjs";

// src/http/routes/create-course.ts
import { z } from "zod";
async function createCourse(app) {
  app.withTypeProvider().post("/courses", {
    schema: {
      summary: "Create a course",
      tags: ["courses"],
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
    const { name } = request.body;
    const courseWithSameName = await prisma.course.findFirst({
      where: {
        name
      }
    });
    if (courseWithSameName !== null) {
      throw new BadRequest("Another course with the same name already exists.");
    }
    const course = await prisma.course.create({
      data: {
        name
      }
    });
    return await reply.status(201).send({ courseId: course.id });
  });
}

export {
  createCourse
};
