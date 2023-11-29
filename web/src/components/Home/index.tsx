import { Link } from "react-router-dom";

import { Container, AnimationContainer } from "./styles";

import Button from "../Button";

import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <Container>
      <AnimationContainer>
        <img src={logo} alt="EasyGenerator Logo" />

        <h2>Welcome to the Application! 👋</h2>

        <div>
          <Link to="/login">
            <Button>Login</Button>
          </Link>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </AnimationContainer>
    </Container>
  );
};

export default Home;
