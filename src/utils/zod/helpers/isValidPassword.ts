import { isValidPasswordRegex } from "utils/regex";

const isValidPassword = (password: string) =>
  isValidPasswordRegex.test(password);

export default isValidPassword;
