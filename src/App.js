import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GetStartedPage from "./pages/GetStartedPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import GlobalStyles from "./styles";

const theme = {
  primary: "#2064C5",
  secondary: "#20C582",
  danger: "#C52063"
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={GetStartedPage} />
          <Route path="/quiz" exact component={QuizPage} />
          <Route path="/result" exact component={ResultPage} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}
