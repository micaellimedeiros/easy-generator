import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import api from "../services/api";

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
    <div>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Name:</label>
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
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
          })}
        />

        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
