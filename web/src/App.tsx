import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import ApplicationPage from "./components/ApplicationPage";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<ApplicationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
