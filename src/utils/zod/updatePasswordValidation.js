import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import isValidPassword from "./helpers/isValidPassword";

const updatePasswordSchema = z
  .object({
    password: z.string().min(6).refine(isValidPassword, {
      message:
        "Password should contain only latin letters and symbols ( . - _ )",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password must match password",
    path: ["confirmPassword"],
  });

const useUpdatePasswordForm = () =>
  useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(updatePasswordSchema),
  });

export default useUpdatePasswordForm;
