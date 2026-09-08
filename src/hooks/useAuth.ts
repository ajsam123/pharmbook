import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../services/authService";
import { handleApiError } from "../utils/handleApiError";

// Signup mutation
const SignUpMutation = () => {
  return useMutation({
    mutationFn: signup,
    onError: (error) => handleApiError(error),
  });
};
// Login Mutation
const LoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onError: (error) => handleApiError(error),
  });
};
export { LoginMutation, SignUpMutation };
