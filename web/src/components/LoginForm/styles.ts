import styled, { keyframes } from "styled-components";

import signInBackgroundImg from "../../assets/sign-in.jpg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;
  }

  a {
    color: #ffa246;
    display: block;
    margin-top: 14px;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
