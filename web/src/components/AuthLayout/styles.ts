import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  background: #121214;

  /* align-items: stretch; */

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

  a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(1.1);
    }
  }

  @media (max-width: 768px) {
    padding: 10px 0 32px;
  }
`;
