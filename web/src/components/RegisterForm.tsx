import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";

import api from "../services/api";

type FormData = {
  email: string;
  name: string;
  password: string;
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await api.post("auth/register", data);

      navigate("/");
    } catch (error: any) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input {...register("email", { required: "Email is required" })} />

        {errors.email && <p>{errors.email.message}</p>}

        <label>Password:</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />

        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegisterForm;
