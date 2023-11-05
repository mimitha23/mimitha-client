import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPassword } from "./helpers";

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

export type UpdatePasswordFormT = z.infer<typeof updatePasswordSchema>;

const useUpdatePasswordForm = () =>
  useForm<UpdatePasswordFormT>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

export default useUpdatePasswordForm;
