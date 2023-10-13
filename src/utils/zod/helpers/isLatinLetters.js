export default function isLatinLetters(value) {
  const reg = /^[A-Za-z\s]*$/;
  return reg.test(value);
}
