type Quiz = Record<string, number>

export function countRightAnswers(answers: Quiz): number {
  let count = 0
  for (const key in answers) {
    if (answers[key] === 1) {
      count++
    }
  }
  return count
}
