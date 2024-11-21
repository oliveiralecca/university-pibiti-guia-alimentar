import {
  BadRequest
} from "./chunk-HIRBKS32.mjs";
import {
  prisma
} from "./chunk-PNMBIITM.mjs";

// src/http/routes/get-courses.ts
import { z } from "zod";
async function getCourses(app) {
  app.withTypeProvider().get("/courses", {
    schema: {
      summary: "Get a course",
      tags: ["courses"],
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
        name: "asc"
      }
    });
    if (courses === null) {
      throw new BadRequest("There are no courses registered.");
    }
    return await reply.status(200).send(courses);
  });
}

export {
  getCourses
};
