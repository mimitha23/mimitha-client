import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPassword, isLatinLetters } from "./helpers";

const registerSchema = z
  .object({
    email: z.string().email(),
    username: z
      .string()
      .min(2)
      .max(20)
      .trim()
      .toLowerCase()
      .refine(isLatinLetters, {
        message: "username must contain only latin letters",
      }),
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

export type RegisterFormT = z.infer<typeof registerSchema>;

const useRegistrationForm = () =>
  useForm<RegisterFormT>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

export default useRegistrationForm;
