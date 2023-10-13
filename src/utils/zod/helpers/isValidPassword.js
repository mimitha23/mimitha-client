export default function isValidPassword(password) {
  const reg = /^([a-zA-Z0-9-_.]{6,})*$/;
  return reg.test(password);
}
