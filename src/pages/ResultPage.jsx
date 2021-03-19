import { useHistory, useLocation } from "react-router-dom";
import Result from "../components/Result";

export default function ResultPage() {
  const { state } = useLocation();
  const history = useHistory();
  const onTryAgain = () => {
    history.push("/");
  };
  return (
    <Result
      onTryAgain={onTryAgain}
      score={state.score || 0}
      streak={state.highestStreak || 0}
    />
  );
}
