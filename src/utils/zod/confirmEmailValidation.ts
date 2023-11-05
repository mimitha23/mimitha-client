import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const confirmEmailSchema = z.object({
  pin: z.string(),
});

export type ConfirmEmailFormT = z.infer<typeof confirmEmailSchema>;

const useConfirmEmailForm = () =>
  useForm<ConfirmEmailFormT>({
    resolver: zodResolver(confirmEmailSchema),
    defaultValues: {
      pin: "",
    },
  });

export default useConfirmEmailForm;
