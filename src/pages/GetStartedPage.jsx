import { useHistory } from "react-router-dom";
import GetStartedForm from "../components/GetStartedForm";

export default function GetStartedPage() {
  const history = useHistory();
  const onStart = async (opts) => {
    history.push({
      pathname: "/quiz",
      state: opts
    });
  };
  return <GetStartedForm onStart={onStart} />;
}
