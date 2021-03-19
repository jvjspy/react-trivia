import styled from "styled-components";
import SelectInput from "./SelectInput";
import Button from "./Button";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
`;

const FormWrapper = styled.div`
  margin: auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: -3px 3px 5px;
  padding: 2rem;
  max-width: 80%;
  color: ${(props) => props.theme.primary};
`;
const Title = styled.h1`
  text-align: center;
  padding: 1rem;
  color: white;
  font-size: 3rem;
  text-shadow: #7a7a7a 4px 3px 0;
`;
const FormTitle = styled.h3`
  text-align: center;
  padding: 1rem;
`;
const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
const amounts = [10, 20, 30, 40, 50];
const categories = [
  {
    id: 8,
    name: "Any"
  },
  {
    id: 9,
    name: "General Knowledge"
  },
  {
    id: 10,
    name: "Book"
  },
  {
    id: 11,
    name: "Film"
  },
  {
    id: 12,
    name: "Music"
  }
];
const difficulties = ["Any", "Easy", "Medium", "Hard"];
export default function GetStartedForm({ onStart }) {
  const [values, setValues] = useState({
    amount: 10,
    category: 8,
    difficulty: "any"
  });
  const onChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    });
  };
  return (
    <Wrapper>
      <Title>FUN TRIVIA</Title>
      <FormWrapper>
        <FormTitle>GET STARTED</FormTitle>
        <FormGroup>
          <label htmlFor="amount">Number of Questions:</label>
          <SelectInput onChange={onChange} id="amount" name="amount">
            {amounts.map((amount) => (
              <option value={amount} key={amount}>
                {amount}
              </option>
            ))}
          </SelectInput>
        </FormGroup>
        <FormGroup>
          <label htmlFor="category">Select Category:</label>
          <SelectInput onChange={onChange} id="category" name="category">
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </SelectInput>
        </FormGroup>
        <FormGroup>
          <label htmlFor="difficulty">Select Difficulty:</label>
          <SelectInput onChange={onChange} id="difficulty" name="difficulty">
            {difficulties.map((difficulty) => (
              <option value={difficulty.toLowerCase()} key={difficulty}>
                {difficulty}
              </option>
            ))}
          </SelectInput>
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button onClick={() => onStart(values)}>START</Button>
        </div>
      </FormWrapper>
    </Wrapper>
  );
}
