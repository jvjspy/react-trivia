import { createGlobalStyle } from "styled-components";
import bg from "./bg.png";

const GlobalStyles = createGlobalStyle`
#root{
  height: 100%;
}
html{
  font-family: montserrat;
  font-size:16px;
  height: 100%;
}
body{
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
button{
  font-family: montserrat;
}
&.fade-in-enter{
  transform: translateY(-100%);
  opacity:0;
  transition: all 500ms;
}
&.fade-in-enter-active{
  transform: translateY(0);
  opacity:1;
  transition: all 500ms;
}
&.fade-in-exit{
  transform: translateY(0);
  opacity:1;
  transition: all 500ms;
}
&.fade-in-exit-active{
  transform: translateY(-100%);
  opacity:0;
  transition: all 500ms;
}
&.fade-in-appear{
  transform: translateY(-100%);
  opacity:0;
  transition: all 500ms;
}
&.fade-in-appear-done{
  transform: translateY(0);
  opacity:1;
  transition: all 500ms;
}
`;
export default GlobalStyles;
