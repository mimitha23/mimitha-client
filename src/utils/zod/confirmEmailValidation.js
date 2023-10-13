import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const confirmEmailSchema = z.object({
  pin: z.number(),
});

const useConfirmEmailForm = () =>
  useForm({
    defaultValues: {
      pin: "",
    },
    resolver: zodResolver(confirmEmailSchema),
  });

export default useConfirmEmailForm;
