import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #121214;

  @media (max-width: 768px) {
    background-size: 2000px auto, 1000px auto;
  }
`;

export const LoginWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 32px;
`;

export const ChildrenWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 28px 0 50px;

  @media (max-width: 768px) {
    padding: 10px 0 32px;
  }
`;
