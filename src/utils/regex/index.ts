const isLatinLettersRegex = /^[A-Za-z\s]*$/;
const isGeorgiaLettersRegex = /^[ა-ჰ]*$/g;
const isValidPasswordRegex = /^([a-zA-Z0-9-_.]{6,})*$/;

export { isLatinLettersRegex, isGeorgiaLettersRegex, isValidPasswordRegex };
