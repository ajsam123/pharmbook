import { Button } from "#components/ui/button";
import { Input } from "#components/ui/input";
import { LockIcon, Mail } from "lucide-react";

const LoginPage = () => {
  return (
    <section className="w-full flex justify-center items-center h-screen flex-col gap-2">
      {/* Header */}
      <h1 className="text-4xl">Welcome back</h1>
      <span>Don't have an account yet?</span>

      {/* Input session */}
      <div className="flex flex-col gap-4 w-full max-w-3/5">
        <Input placeholder="Email" leftIcon={<Mail />} />
        <Input placeholder="password" leftIcon={<LockIcon />} />

        {/* Submit button */}
        <Button>Login</Button>
      </div>
    </section>
  );
};

export default LoginPage;
