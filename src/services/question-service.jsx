import axios from "axios";
import { v4 } from "uuid";

function buildQuestionList(data) {
  return data.map((q) => {
    const question = q.question;
    const correctAns = q["correct_answer"];
    const answers = [correctAns, ...q["incorrect_answers"]];
    const answerList = answers
      .sort(() => Math.random() - 0.5)
      .map((ans, index) => ({
        id: v4(),
        label: String.fromCharCode(65 + index),
        text: ans,
        correct: ans === correctAns
      }));
    return {
      question,
      answers: answerList
    };
  });
}

async function fetchQuestionList(opts) {
  const res = await axios.get("https://opentdb.com/api.php", {
    params: {
      amount: opts.amount,
      category: opts.category === 8 ? undefined : opts.category,
      difficulty: opts.difficulty === "any" ? undefined : opts.difficulty
    }
  });
  return buildQuestionList(res.data.results);
}
export { fetchQuestionList };
