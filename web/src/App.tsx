import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
