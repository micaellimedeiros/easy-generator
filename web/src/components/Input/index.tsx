import React, { HTMLProps } from "react";

interface InputLabelProps extends HTMLProps<HTMLInputElement> {
  label: string;
  register?: object;
  error?: string;
}

import { Container, InputContainer } from "./styles";

const Input: React.FC<InputLabelProps> = ({
  label,
  register,
  error,
  ...inputProps
}) => {
  return (
    <Container>
      <label htmlFor={inputProps.id}>{label}</label>

      <InputContainer>
        <input {...inputProps} {...register} />

        {error && <p>{error}</p>}
      </InputContainer>
    </Container>
  );
};

export default Input;
