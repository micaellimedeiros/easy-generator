import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Application</h2>
      <p>Choose an option:</p>

      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
