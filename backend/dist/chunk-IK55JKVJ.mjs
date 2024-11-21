import {
  countRightAnswers
} from "./chunk-33544KAL.mjs";
import {
  prisma
} from "./chunk-PNMBIITM.mjs";

// src/http/routes/create-ufs-user.ts
import { z } from "zod";
var Answers = /* @__PURE__ */ ((Answers2) => {
  Answers2[Answers2["Incorrect"] = 0] = "Incorrect";
  Answers2[Answers2["Correct"] = 1] = "Correct";
  return Answers2;
})(Answers || {});
async function createUfsUser(app) {
  app.withTypeProvider().post("/users/ufs", {
    schema: {
      summary: "Create an user from ufs",
      tags: ["users"],
      body: z.object({
        description: z.object({
          gender: z.string(),
          age: z.number().int(),
          course: z.string(),
          campus: z.string(),
          healthGraduated: z.string(),
          knowGuia: z.string(),
          opinionAbout: z.string().optional()
        }),
        quiz: z.object({
          question1: z.nativeEnum(Answers),
          question2: z.nativeEnum(Answers),
          question3: z.nativeEnum(Answers),
          question4: z.nativeEnum(Answers),
          question5: z.nativeEnum(Answers),
          question6: z.nativeEnum(Answers),
          question7: z.nativeEnum(Answers),
          question8: z.nativeEnum(Answers),
          question9: z.nativeEnum(Answers),
          question10: z.nativeEnum(Answers),
          question11: z.nativeEnum(Answers),
          question12: z.nativeEnum(Answers),
          question13: z.nativeEnum(Answers),
          question14: z.nativeEnum(Answers),
          question15: z.nativeEnum(Answers),
          question16: z.nativeEnum(Answers),
          question17: z.nativeEnum(Answers),
          question18: z.nativeEnum(Answers),
          question19: z.nativeEnum(Answers),
          question20: z.nativeEnum(Answers),
          question21: z.nativeEnum(Answers),
          question22: z.nativeEnum(Answers),
          question23: z.nativeEnum(Answers),
          question24: z.nativeEnum(Answers)
        })
      }),
      response: {
        201: z.object({
          userId: z.string(),
          score: z.number().int()
        })
      }
    }
  }, async (request, reply) => {
    const { description, quiz } = request.body;
    const score = countRightAnswers(quiz);
    const user = await prisma.ufsUser.create({
      data: {
        description,
        quiz: {
          ...quiz,
          corrects: score
        }
      }
    });
    return await reply.status(201).send({ userId: user.id, score });
  });
}

export {
  createUfsUser
};
