import { axiosPrivateQuery, axiosPublicQuery } from "service/axios";

import { LoginFormT } from "utils/zod/loginValidation";
import { RegisterFormT } from "utils/zod/registerValidation";
import { ForgotPasswordFormT } from "utils/zod/forgotPasswordValidation";
import { ConfirmEmailFormT } from "utils/zod/confirmEmailValidation";
import { UpdatePasswordFormT } from "utils/zod/updatePasswordValidation";
import { GoogleLoginArgsT } from "interface/DB/auth.types";

export async function loginQuery(payload: LoginFormT) {
  return await axiosPublicQuery.post("/auth/login", payload);
}

export async function googleLoginQuery(payload: GoogleLoginArgsT) {
  return await axiosPublicQuery.post("/auth/login/google", payload);
}

export async function registrationQuery(payload: RegisterFormT) {
  return await axiosPublicQuery.post("/auth/register", payload);
}

export async function logoutQuery() {
  return await axiosPrivateQuery.post("/auth/logout");
}

export async function forgotPasswordQuery(payload: ForgotPasswordFormT) {
  return await axiosPublicQuery.post("/auth/forgot-password", payload);
}

export async function confirmEmailQuery(payload: ConfirmEmailFormT) {
  return await axiosPublicQuery.put("/auth/forgot-password", payload);
}

export async function updatePasswordQuery(payload: UpdatePasswordFormT) {
  return await axiosPublicQuery.patch("/auth/forgot-password", payload);
}
