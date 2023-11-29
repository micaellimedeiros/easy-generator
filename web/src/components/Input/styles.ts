import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const InputContainer = styled.div`
  background: #232129;
  border-radius: 10px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  input {
    flex: 1;
    width: 100%;
    background: transparent;
    color: #f4ede8;

    border: 2px solid transparent;
    padding: 0.94rem 1.25rem;

    outline: 0;
    transition: border 0.3s;

    font-size: 1rem;
    border-radius: 5px;

    &::placeholder {
      color: #666360;
    }
  }

  &:focus-within {
    input {
      border-color: #ffa246;
    }
  }
`;
