import z from "zod";

const LoginSchema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, "Minimum of 8 character")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    ),
});

const SignUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(8, "Minimum of 8 character")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    ),

  // password:
});

export { LoginSchema, SignUpSchema };
