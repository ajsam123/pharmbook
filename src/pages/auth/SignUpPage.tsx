import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "../../schema/auth.schema";
import type { SignUpData } from "../../types/auth";
import { signup } from "../../services/authService";

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const submitHandler = (data: SignUpData) => {
    const res = signup(data);
    return res;
  };

  // const errorHan
  return (
    <section className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      <h1 className="text-3xl">Let's get started</h1>
      <span>Sign up to --</span>
      {/* <form action=""> */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-3 w-full max-w-3/5"
      >
        {/* First name */}
        <Input
          {...register("firstName")}
          label="First Name"
          leftIcon={<Mail />}
          placeholder="First name"
          error={errors.firstName?.message}
        />

        {/* Last name */}
        <Input
          {...register("lastName")}
          label="Last Name"
          leftIcon={<Mail />}
          placeholder="Last name"
          error={errors.lastName?.message}
        />

        {/* Email */}
        <Input
          {...register("email")}
          label="Email"
          leftIcon={<Mail />}
          placeholder="Email"
          error={errors.email?.message}
        />

        {/* Password */}
        <Input
          {...register("password")}
          label="Passsword"
          leftIcon={<Lock />}
          placeholder="password"
          error={errors.password?.message}
        />

        {/* Signup Submit button */}
        <Button className="" type="submit">
          SignUp
        </Button>
      </form>
      {/* </form> */}
    </section>
  );
};

export default SignUpPage;
