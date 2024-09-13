import styled from "styled-components";

export const RegistrationFormInputsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;

  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
`;

export const RegForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const RegFormSbtBtm = styled.button`
  padding: 5px 20px;
  border: 1px solid #000;
  border-radius: 10px;

  transition: scale 150ms linear;

  &:hover {
    scale: 1.1;
  }

  &:disabled {
    scale: none;
    color: gray;
    border-color: gray;
  }
`;
