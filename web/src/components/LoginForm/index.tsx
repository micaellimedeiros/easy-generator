import { useState } from "react";
import { Link } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { useAuth } from "../../context/auth";

import api from "../../services/api";
import logo from "../../assets/logo.svg";

import Button from "../Button";
import Input from "../Input";

import { Container, Content, AnimationContainer, Background } from "./styles";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("auth/login", data);

      toast.success(`User logged in successfully`);

      login(response.data.token);
    } catch (error: any) {
      toast.error(`Error: ${error.response.data.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="EasyGenerator Logo" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Sign In</h2>

            <Input
              type="email"
              id="email"
              label="Email"
              placeholder="johndoe@email.com"
              required
              register={{
                ...register("email", {
                  required: "Email is required",
                }),
              }}
              error={errors.email?.message?.toString()}
            />

            <Input
              type="password"
              id="password"
              label="Password"
              placeholder="Safe password"
              required
              register={{
                ...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: "Password must meet the requirements",
                  },
                }),
              }}
              error={errors.password?.message?.toString()}
            />

            <Button type="submit" disabled={loading}>
              Login
            </Button>
          </form>

          <Link to="/">
            <FiArrowLeft />
            Back to home
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default LoginForm;
