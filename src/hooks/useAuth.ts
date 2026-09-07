import { useQuery, useMutation } from "@tanstack/react-query";
import { signup } from "../services/authService";

const useAuth = () => {
  const signUpMutation = useMutation({
    mutationFn: signup,
    onError,
  });
};
