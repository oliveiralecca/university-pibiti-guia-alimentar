// src/http/routes/utils/countRightAnswers.ts
function countRightAnswers(answers) {
  let count = 0;
  for (const key in answers) {
    if (answers[key] === 1) {
      count++;
    }
  }
  return count;
}

export {
  countRightAnswers
};
