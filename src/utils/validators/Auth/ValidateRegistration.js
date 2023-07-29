import {
  validationType,
  availableValidationRules as Rules,
} from "utils/validators/helpers/Validate";
import Validators from "utils/validators/Validators";

export default class ValidateRegistration extends Validators {
  constructor() {
    super();

    this.validationToExecute = [
      {
        key: "email",
        validationType: validationType.isPrimitive,
        rules: [Rules.notIsEmpty, Rules.isEmail],
      },
      {
        key: "username",
        validationType: validationType.isPrimitive,
        rules: [Rules.notIsEmpty, Rules.isValidPassword],
      },
      {
        key: "password",
        validationType: validationType.isPrimitive,
        rules: [Rules.notIsEmpty, Rules.isValidPassword],
      },
      {
        key: "confirm_password",
        validationType: validationType.isPrimitive,
        rules: [Rules.notIsEmpty],
      },
    ];

    this.error = {
      hasError: false,
      email: { hasError: false, message: "" },
      username: { hasError: false, message: "" },
      password: { hasError: false, message: "" },
      confirm_password: { hasError: false, message: "" },
    };
  }

  validateConfirmPassword() {
    let isValid = true;

    if (this.credentials.password !== this.credentials.confirm_password)
      isValid = false;

    const message = isValid ? "" : `გთხოვთ გაიმეოროთ პაროლი.`;

    if (
      !isValid &&
      !this.error.password.hasError &&
      !this.error.confirm_password.hasError
    ) {
      this.error.hasError = true;
      this.error.confirm_password = {
        hasError: true,
        message,
      };
    }

    return this;
  }
}