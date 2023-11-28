import { ReactNode } from "react";

import { Container, LoginWrapper, ChildrenWrapper } from "./styles";

type Props = {
  children?: ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <Container>
      <LoginWrapper>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </LoginWrapper>
    </Container>
  );
}

export default AuthLayout;
