import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import isValidPassword from "./helpers/isValidPassword";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).refine(isValidPassword, {
    message: "Password should contain only latin letters and symbols ( . - _ )",
  }),
});

const useLoginForm = () =>
  useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

export default useLoginForm;
