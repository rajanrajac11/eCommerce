import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/AuthSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useEffect } from "react";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  // Clear session on component load
  useEffect(() => {
    const clearSession = async () => {
      try {
        await authService.logout(); // If using Appwrite, clear server-side session
        sessionStorage.clear(); // Clear session storage
        localStorage.removeItem("authToken"); // Optionally clear localStorage if used
      } catch (err) {
        console.error("Error clearing session:", err.message);
      }
    };
    clearSession();
  }, []);

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      error.message = error.message.replace(/^AppwriteException:\s*/, "");
      error.message = error.message.replace(
        /id, email, or phone/,
        "username or email"
      );
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-full bg-gray-100 p-5">
      <div className="mx-auto w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded-xl p-10 border border-gray-200 dark:border-gray-600">
        <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 dark:text-gray-100">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-300">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline dark:text-blue-400"
          >
            Sign In
          </Link>
        </p>
        {error && (
          <p className="text-red-600 dark:text-red-400 mt-8 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full bg-primary text-white dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
