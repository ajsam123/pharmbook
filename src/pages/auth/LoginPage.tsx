import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockIcon, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../schema/auth.schema.js";
import { z } from "zod";
import type { LoginData } from "../../types/auth.js";
import { LoginMutation } from "../../hooks/useAuth.js";
import toast from "react-hot-toast";
const LoginPage = () => {
  type LoginFormData = z.infer<typeof LoginSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Login mutation
  const { mutate, isPending } = LoginMutation();
  const submitHandler = (data: LoginData) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("Login Succesful");
      },
    });
  };

  return (
    <section className="w-full flex justify-center items-center h-screen flex-col gap-2">
      {/* Header */}
      <h1 className="text-4xl">Welcome back</h1>
      <span>Don't have an account yet?</span>

      {/* Input session */}
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col gap-4 w-full max-w-3/5"
      >
        <Input
          {...register("email")}
          placeholder="Email"
          leftIcon={<Mail />}
          label="Email"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          placeholder="password"
          leftIcon={<LockIcon />}
          label="Password"
          error={errors.password?.message}
        />

        {/* Submit button */}
        <Button type="submit" loading={isPending}>
          Login
        </Button>
      </form>
    </section>
  );
};

export default LoginPage;
