import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.25rem;

  span {
    margin: 0.62rem 0 0 0.62rem;
    font-size: 0.75rem;
    color: red;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  input {
    width: 100%;
    padding: 0.94rem 1.25rem;

    background: #121214;
    font-size: 1rem;
    border: 2px solid transparent;
    border-radius: 5px;
    color: #e1e1e6;

    outline: 0;
    transition: border 0.3s;

    ::placeholder {
      color: #737380;
    }

    &:disabled {
      cursor: not-allowed;
      color: #696969;
    }
  }

  &:focus-within {
    input {
      border-color: #ffa246;
    }
  }
`;
