import styled, { keyframes } from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffa246;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e28;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: #ffa246cc;
  }

  &:disabled {
    background: #ffa24666;
    cursor: not-allowed;
  }
`;

const loadingAnimation = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }

  50% {
    transform: scale(1.0);
  }
`;

export const Loader = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;

  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;

    animation: ${loadingAnimation} 2s infinite ease-in-out;
  }

  &::after {
    animation-delay: -1s;
  }
`;
