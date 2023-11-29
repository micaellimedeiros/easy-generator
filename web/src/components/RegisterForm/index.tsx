import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import api from "../../services/api";
import logo from "../../assets/logo.svg";

import Input from "../Input";
import Button from "../Button";

import { Container, Content, AnimationContainer, Background } from "./styles";

type FormData = {
  email: string;
  name: string;
  password: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);

      await api.post("auth/register", data);

      toast.success(`User registered successfully`);

      navigate("/");
    } catch (error: any) {
      toast.error(`Error: ${error.response.data.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logo} alt="EasyGenerator Logo" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Register</h2>

            <Input
              id="name"
              label="Name"
              placeholder="John Doe"
              required
              register={{
                ...register("name", {
                  required: "Name is required",
                }),
              }}
              error={errors.name?.message?.toString()}
            />

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
                    message:
                      "Password must have at least one letter, one number and one special character",
                  },
                }),
              }}
              error={errors.password?.message?.toString()}
            />

            <Button type="submit" disabled={loading} loading={loading}>
              Register
            </Button>
          </form>

          <Link to="/">
            <FiArrowLeft />
            Back to home
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default RegisterForm;
