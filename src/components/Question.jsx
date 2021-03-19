import { memo } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const StyledQuestion = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 3px solid white;
  color: ${(props) => props.theme.primary};
`;

const StyledQuestionProgress = styled.div`
  margin: 1rem 0;
`;
const StyledQuestionText = styled.div`
  margin-bottom: 1rem;
`;

export default memo(function Question({ question, current, total }) {
  return (
    <StyledQuestion>
      <ProgressBar value={current} maxValue={total} />
      <StyledQuestionProgress>
        Question: {current}/{total}
      </StyledQuestionProgress>
      <StyledQuestionText dangerouslySetInnerHTML={{ __html: question }} />
    </StyledQuestion>
  );
});
