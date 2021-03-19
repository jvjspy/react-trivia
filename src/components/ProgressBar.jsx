import styled from "styled-components";

const StyledProgressBar = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 1rem;
  border-radius: 3px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.percent}%;
    background-color: ${(props) => props.theme.primary};
    border-radius: inherit;
    transition: all 500ms;
  }
`;

export default function ProgressBar({ value, maxValue }) {
  return <StyledProgressBar percent={(value / maxValue) * 100} />;
}
