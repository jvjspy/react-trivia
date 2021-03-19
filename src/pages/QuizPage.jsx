import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Col, Row } from "react-flexbox-grid";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import AnswerList from "../components/AnswerList";
import Button from "../components/Button";
import Question from "../components/Question";
import Timer from "../components/Timer";
import useTimer from "../hooks/useTimer";
import { fetchQuestionList } from "../services/question-service";
const TimerWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
const SkipButonWrapper = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 1rem;
`;
const StyledLoading = styled.h1`
  color: ${(props) => props.theme.primary};
  text-align: center;
  padding: 2rem;
`;
export default function QuizPage() {
  const { state: opts } = useLocation();
  const timer = useTimer(10);
  const [progress, setProgress] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [timeout, setTimeout] = useState(false);
  const [questionList, setQuestionList] = useState();
  const scoreRef = useRef(0);
  const streakRef = useRef(0);
  const highestStreakRef = useRef(0);
  const history = useHistory();
  const onTimeout = () => {
    if (timeout) return;
    setTimeout(true);
    const correctAns = currentQuestion.answers.find((q) => q.correct);
    if (correctAns.label === selectedAnswer) {
      scoreRef.current++;
      streakRef.current++;
      if (streakRef.current > highestStreakRef.current)
        highestStreakRef.current = streakRef.current;
    } else {
      streakRef.current = 0;
    }
  };
  useEffect(() => {
    if (opts)
      fetchQuestionList(opts).then((res) => {
        setQuestionList(res);
        timer.start();
      });
  }, [opts]);
  useEffect(() => {
    if (timer.second <= 0) {
      timer.stop();
      onTimeout();
    }
  });
  const onSelectAnswer = useCallback((ansLabel) => {
    setSelectedAnswer(ansLabel);
  }, []);
  const onNextQuestion = () => {
    if (progress < questionList.length) {
      setProgress(progress + 1);
      setTimeout(false);
      setSelectedAnswer(null);
      timer.start();
    }
  };
  const onSkipQuestion = () => {
    timer.skipTime();
    onTimeout();
  };
  const onShowResult = useCallback(() => {
    history.push({
      pathname: "/result",
      state: {
        score: scoreRef.current,
        highestStreak: highestStreakRef.current
      }
    });
  }, [history]);
  const currentQuestion = useMemo(
    () => questionList && questionList[progress - 1],
    [questionList, progress]
  );
  const gameOver = useMemo(() => timeout && progress === questionList.length, [
    timeout,
    progress,
    questionList
  ]);
  if (!opts) return <Redirect to="/" />;
  if (!questionList) return <StyledLoading>LOADING...</StyledLoading>;
  return (
    <>
      <Question
        current={progress}
        total={questionList.length}
        question={currentQuestion.question}
      />
      <Row center="lg" style={{ marginTop: "1rem" }}>
        <TimerWrapper lg={2} md={2}>
          <Timer value={timer.second} />
        </TimerWrapper>
        <Col lg={8} md={8}>
          <AnswerList
            answers={currentQuestion.answers}
            onSelectAnswer={onSelectAnswer}
            showResult={timeout}
            selectedAnswer={selectedAnswer}
          />
        </Col>
        <SkipButonWrapper lg={2} md={2}>
          {gameOver ? (
            <Button onClick={onShowResult}>RESULT</Button>
          ) : timeout ? (
            <Button onClick={onNextQuestion}>NEXT</Button>
          ) : (
            <Button onClick={onSkipQuestion}>SKIP</Button>
          )}
        </SkipButonWrapper>
      </Row>
    </>
  );
}
