import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import api from "../services/api";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await api.post("auth/login", data);

      toast.success(`User logged in successfully`);

      navigate("/");
    } catch (error: any) {
      toast.error(`Error: ${error.response.data.message}`);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>

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

export default LoginForm;
