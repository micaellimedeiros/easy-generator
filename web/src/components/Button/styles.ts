import styled from "styled-components";

export const Container = styled.button`
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
