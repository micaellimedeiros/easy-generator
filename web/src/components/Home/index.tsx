import { Link } from "react-router-dom";

import { Container, Content, AnimationContainer, Background } from "./styles";

import Button from "../Button";

const Home = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h2>Welcome to the Application</h2>
          <p>Choose an option:</p>

          <div>
            <Link to="/login">
              <Button>Login</Button>
            </Link>

            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default Home;
