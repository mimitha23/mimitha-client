import { isLatinLettersRegex } from "utils/regex";

const isLatinLetters = (value: string) => isLatinLettersRegex.test(value);

export default isLatinLetters;
