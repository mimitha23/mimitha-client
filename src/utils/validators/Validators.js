import ValidateHelpers from "./helpers/ValidateHelpers";

export default class Validators extends ValidateHelpers {
  // regexes
  regs = {
    has_white_space: /\s/g,
    has_two_or_more_white_space_in_sequence: /.*\s\s+.*/,
    is_word: /\w/g,
    is_email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    is_valid_password: /^([a-zA-Z0-9-_.]{6,})*$/,
    is_only_latin_letters: /^[A-Za-z]*$/,
    is_latin_letters: /^[A-Za-z\s]*$/,
    is_latin_letters_and_dash: /^[A-Za-z\s-]*$/,
    is_only_georgian_letters: /^[ა-ჰ]*$/,
    is_georgian_letters: /^[ა-ჰ\s]*$/,
    is_valid_hex_color: /^#[0-9A-F]{6}$/i,
    is_file_type_image: /image\/*/,
  };

  notIsEmpty({ key, value }) {
    let isValid = true;

    if (
      (typeof value === "string" && !value.trim()) ||
      (typeof value === "number" && isNaN(value)) ||
      typeof value === "undefined" ||
      value === null
    )
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(key)} არ შეიძლება იყოს ცარიელი`;

    return { hasError: !isValid, message };
  }

  isNumber({ key, value }) {
    let isValid = true;

    if (typeof +value !== "number" || isNaN(value)) isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(key)} უნდა წარმოადგენდეს ციფრს`;

    return { hasError: !isValid, message };
  }

  isBoolean({ key, value }) {
    let isValid = true;

    if (typeof value !== "boolean") isValid = false;

    const message = isValid ? "" : `მიუთითეთ ${this.splitToUpperCase(key)}`;

    return { hasError: !isValid, message };
  }

  isOnlyGeorgianLetters({ key, value }) {
    let isValid = true;

    if (
      typeof value !== "string" ||
      (typeof value === "string" &&
        !this.regs.is_only_georgian_letters.test(value))
    )
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(
          key
        )} უნდა შეიყვანოთ მხოლოდ ქართული ასოებით, დაშორებისა და სიმბოლოების გარეშე.`;

    return { hasError: !isValid, message };
  }

  isGeorgianLetters({ key, value }) {
    let isValid = true;

    if (
      typeof value !== "string" ||
      (typeof value === "string" && !this.regs.is_georgian_letters.test(value))
    )
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(key)} უნდა შეიყვანოთ მხოლოდ ქართული ასოებით.`;

    return { hasError: !isValid, message };
  }

  isOnlyLatinLetters({ key, value }) {
    let isValid = true;

    if (
      typeof value !== "string" ||
      (typeof value === "string" &&
        !this.regs.is_only_latin_letters.test(value))
    )
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(
          key
        )} უნდა შეიყვანოთ მხოლოდ ლათინური ასოებით, დაშორებისა და სიმბოლოების გარეშე.`;

    return { hasError: !isValid, message };
  }

  isLatinLetters({ key, value }) {
    let isValid = true;

    if (
      typeof value !== "string" ||
      (typeof value === "string" && !this.regs.is_latin_letters.test(value))
    )
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(key)} უნდა შეიყვანოთ მხოლოდ ლათინური ასოებით.`;

    return { hasError: !isValid, message };
  }

  isEmail({ key, value }) {
    let isValid = true;

    if (typeof value !== "string" && !this.regs.is_email.test(value))
      isValid = false;

    const message = isValid
      ? ""
      : `გთხოვთ შეიყვანოთ ვალიდური ${this.splitToUpperCase(key)}.`;

    return { hasError: !isValid, message };
  }

  isValidPassword({ key, value }) {
    let isValid = true;

    if (typeof value === "string" && !this.regs.is_valid_password.test(value))
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(
          key
        )} უნდა შეიცავდეს მხოლოდ ლათინურ ასოებს და სიმბოლოებს ( . - _ ) და უნდა შეადგენდეს მინ. 6 სიმბოლოს`;

    return { hasError: !isValid, message };
  }

  isValidHexColor({ key, value }) {
    let isValid = true;

    if (
      typeof value !== "string" ||
      (typeof value === "string" && !this.regs.is_valid_hex_color.test(value))
    )
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(
          key
        )} უნდა იყოს ვალიდური hex ფერი. მაგ:#26e066.`;

    return { hasError: !isValid, message };
  }

  isImageFile({ key, value }) {
    let isValid = true;

    const isBlob = value instanceof Blob;

    if (
      !value ||
      !isBlob ||
      value.size <= 0 ||
      !value.name ||
      !this.regs.is_file_type_image.test(value.type)
    )
      isValid = false;

    const message = isValid
      ? ""
      : `გთხოვთ ატვირთოთ ${this.splitToUpperCase(key)}. ${this.splitToUpperCase(
          key
        )} უნდა წარმოადგენდეს ფოტოს (JPP, JPEG, PNG, WEBP, SVG და ა.შ).`;

    return { hasError: !isValid, message };
  }

  hasWhiteSpaceInSequence({ key, value }) {
    let isValid = true;

    if (this.regs.has_two_or_more_white_space_in_sequence.test(value))
      isValid = false;

    const message = isValid
      ? ""
      : `${this.splitToUpperCase(key)} შეიცავს 2 ან მეტ შორისს თანმიმდევრობით.`;

    return { hasError: !isValid, message };
  }

  isEmptyObject({ key, value }) {
    let isValid = true;

    if (
      (typeof value === "object" && value === null) ||
      (typeof value === "object" &&
        !Object.values(value).every(
          (value) => value !== "" && value !== null && value !== undefined
        ))
    )
      isValid = false;

    const message = isValid
      ? ""
      : `გთხოვთ მიუთითოთ ${this.splitToUpperCase(key)}`;

    return { hasError: !isValid, message };
  }

  isEmptyArray({ key, value }) {
    let isValid = true;

    if (
      (typeof value === "object" && !Array.isArray(value)) ||
      (Array.isArray(value) && !value[0])
    )
      isValid = false;

    const message = isValid
      ? ""
      : `გთხოვთ მიუთითოთ ${this.splitToUpperCase(key)}`;

    return { hasError: !isValid, message };
  }
}