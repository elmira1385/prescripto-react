import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
interface ILoginOrREgister {
  name?: string;
  email: string;
  password: string;
}
interface IRegisterOrLoginResponse {
  success: boolean;
  token: string;
}
const Login = () => {
  const queryClient = useQueryClient();
  const [isRegisterOpen, setIsResterOpen] = useState(true);
  const route = useNavigate();
  //signUp
  const {
    register: signUpRegister,
    handleSubmit: signUpHandleSubmit,
    formState: { errors: errorSignUp },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    data: singUpData,
    isSuccess: signUpIsSuccess,
    isError: signUpIsError,
    mutate: signUpMutate,
  } = useMutation({
    mutationKey: ["register"],
    mutationFn: async (user: ILoginOrREgister) => {
      const { data } = await api.post<IRegisterOrLoginResponse>(
        "/api/user/register",
        {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      );
      return data;
    },
  });
  useEffect(() => {
    if (signUpIsSuccess) {
      localStorage.setItem("token", singUpData.token);
      toast.success("you are register please login");
      setIsResterOpen(false);
    } else if (signUpIsError) {
      toast.error("please Try Again");
    }
  }, [signUpIsSuccess, signUpIsError]);

  //login
  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: errorLogin },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    data: loginData,
    isSuccess: loginIsSuccess,
    isError: loginIsError,
    mutate: loginMutate,
  } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (user: ILoginOrREgister) => {
      const { data } = await api.post<IRegisterOrLoginResponse>(
        "/api/user/login",
        {
          email: user.email,
          password: user.password,
        },
      );
      return data;
    },
  });

  useEffect(() => {
    if (loginIsSuccess) {
      localStorage.setItem("token", loginData.token);
      queryClient.refetchQueries({
        queryKey: ["getUser"],
      });
      route("/");
      toast.success("you are login");
    } else if (loginIsError) {
      toast.error("please check your information");
    }
  }, [loginIsSuccess, loginIsError,queryClient]);
  return (
    <>
      {isRegisterOpen ? (
        <form
          onSubmit={signUpHandleSubmit(({ name, email, password }) => {
            signUpMutate({ name, email, password });
          })}
          className="min-h-[80vh] flex items-center justify-center"
        >
          <div className="flex flex-col gap-4  items-start p-12   rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">Create Account</p>
              <p>Please sign up to book appointment</p>
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Full Name</p>
              <input
                {...signUpRegister("name", {
                  required: true,
                })}
                className="border border-[#DADADA] rounded w-full p-2"
                type="text"
              />
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Email</p>
              <input
                {...signUpRegister("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="border border-[#DADADA] rounded w-full p-2 "
                type="email"
              />
              {errorSignUp.email && (
                <p className="text-red-500 text-xs">
                  {errorSignUp.email.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Password</p>
              <input
                {...signUpRegister("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="border border-[#DADADA] rounded w-full p-2 "
                type="password"
              />
              {errorSignUp.password && (
                <p className="text-red-500 text-xs">
                  {errorSignUp.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary text-white w-full py-2 m rounded-md text-base"
            >
              Create account
            </button>
            <p>
              Already have an account?
              <span
                onClick={() => {
                  setIsResterOpen(false);
                }}
                className="text-primary underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          </div>
        </form>
      ) : (
        <form
          onSubmit={loginHandleSubmit(({ email, password }) => {
            loginMutate({ email, password });
          })}
          className="min-h-[80vh] flex items-center justify-center"
        >
          <div className="flex flex-col gap-4  items-start p-12   rounded-xl text-[#5E5E5E] text-sm shadow-lg">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-semibold">Login</p>
              <p>Please login to book appointment</p>
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Email</p>
              <input
                {...loginRegister("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="border border-[#DADADA] rounded w-full p-2 "
                type="email"
              />
              {errorLogin.email && (
                <p className="text-red-500 text-xs">
                  {errorLogin.email.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col gap-2 ">
              <p>Password</p>
              <input
                {...loginRegister("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="border border-[#DADADA] rounded w-full p-2 "
                type="password"
              />
              {errorLogin.password && (
                <p className="text-red-500 text-xs">
                  {errorLogin.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary text-white w-full py-2 m rounded-md text-base"
            >
              Login
            </button>
            <p>
              Create a new account?
              <span
                onClick={() => {
                  setIsResterOpen(true);
                }}
                className="text-primary underline cursor-pointer"
              >
                Click here
              </span>
            </p>
          </div>
        </form>
      )}
    </>
  );
};

export default Login;
