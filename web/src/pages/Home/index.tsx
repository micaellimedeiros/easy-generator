import { Link } from "react-router-dom";

import { useAuth } from "../../context/auth";

import logo from "../../assets/logo.svg";
import Button from "../../components/Button";

import { Container, AnimationContainer } from "./styles";

const Home = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Container>
      <AnimationContainer>
        <img src={logo} alt="EasyGenerator Logo" />

        <h2>Welcome to the Application! 👋</h2>

        <div>
          {isLoggedIn ? (
            <Button onClick={async () => logout()}>Logout</Button>
          ) : (
            <>
              <Link to="/login">
                <Button>Login</Button>
              </Link>

              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </>
          )}
        </div>
      </AnimationContainer>
    </Container>
  );
};

export default Home;
