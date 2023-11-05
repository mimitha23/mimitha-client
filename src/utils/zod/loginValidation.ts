import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPassword } from "./helpers";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).refine(isValidPassword, {
    message: "Password should contain only latin letters and symbols ( . - _ )",
  }),
});

export type LoginFormT = z.infer<typeof loginSchema>;

const useLoginForm = () =>
  useForm<LoginFormT>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

export default useLoginForm;
