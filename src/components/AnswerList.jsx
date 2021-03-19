import { memo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Answer from "./Answer";

export default memo(function AnswerList({
  answers,
  onSelectAnswer,
  showResult,
  selectedAnswer
}) {
  return (
    <TransitionGroup appear>
      {answers.map((answer) => (
        <CSSTransition classNames="fade-in" key={answer.id} timeout={500}>
          <Answer
            selected={answer.label === selectedAnswer}
            answerLabel={answer.label}
            answerText={answer.text}
            onSelect={onSelectAnswer}
            showResult={showResult}
            correct={answer.correct}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});
