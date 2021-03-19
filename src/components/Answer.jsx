import clsx from "clsx";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";

const StyledAnswerLabel = styled.div`
  background-color: ${(props) => props.theme.secondary};
  color: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const StyledAnswerText = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`;

const StyledResult = styled.div``;

const StyledAnswer = styled.div`
  background-color: ${(props) =>
    props.selected ? props.theme.primary : "white"};
  border-radius: 20px;
  font-size: 1.2rem;
  padding: 2rem;
  color: ${(props) => (props.selected ? "white" : props.theme.primary)};
  font-weight: bold;
  box-shadow: -3px 3px 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
  &.correct,
  &.incorrect {
    pointer-events: none;
  }
  &.correct {
    & ${StyledResult} {
      color: ${(props) => props.theme.secondary};
    }
  }
  &.incorrect {
    filter: brightness(50%);
    & ${StyledResult} {
      color: ${(props) => props.theme.danger};
    }
  }
`;

export default function Answer({
  answerLabel,
  answerText,
  selected,
  onSelect,
  showResult,
  correct
}) {
  return (
    <StyledAnswer
      onClick={() => onSelect(answerLabel)}
      selected={selected}
      className={clsx({
        correct: showResult && correct,
        incorrect: showResult && !correct
      })}
    >
      <StyledAnswerLabel>{answerLabel}</StyledAnswerLabel>
      <StyledAnswerText dangerouslySetInnerHTML={{ __html: answerText }} />
      {showResult && (correct || selected) && (
        <StyledResult>
          {correct ? (
            <FiCheckCircle size="1.5rem" />
          ) : (
            <ImCancelCircle size="1.5rem" />
          )}
        </StyledResult>
      )}
    </StyledAnswer>
  );
}
