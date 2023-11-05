import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordFormT = z.infer<typeof forgotPasswordSchema>;

const useForgotPasswordForm = () =>
  useForm<ForgotPasswordFormT>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

export default useForgotPasswordForm;
