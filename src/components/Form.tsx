import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";

type Data = {
  email: string;
  password: string;
  confirmPassowrd: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data: Data) => {
    console.log(data);
  };
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input type="text" placeholder="Email..." {...register("email")} />
          <p> {errors.email?.message} </p>
          <input
            type="password"
            placeholder="Password..."
            {...register("password")}
          />
          <p> {errors.password?.message} </p>
          <input
            type="password"
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};
