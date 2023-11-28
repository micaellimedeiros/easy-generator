import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import ApplicationPage from "./components/ApplicationPage";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <Router>
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/application" element={<ApplicationPage />} />
    </Router>
  );
};

export default App;
