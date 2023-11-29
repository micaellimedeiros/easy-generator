import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

import { AuthProvider } from "./context/auth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>

        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
