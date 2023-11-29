import React, { ButtonHTMLAttributes } from "react";

import { Container, Loader } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ loading, children, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? <Loader /> : children}
  </Container>
);

export default Button;
