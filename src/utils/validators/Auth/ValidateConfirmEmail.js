import {
  validationType,
  availableValidationRules as Rules,
} from "utils/validators/helpers/Validate";
import Validators from "utils/validators/Validators";

export default class ValidateConfirmEmail extends Validators {
  constructor() {
    super();

    this.validationToExecute = [
      {
        key: "pin",
        validationType: validationType.isPrimitive,
        rules: [Rules.notIsEmpty, Rules.isNumber],
      },
    ];

    this.error = {
      hasError: false,
      pin: { hasError: false, message: "" },
    };
  }

  validateMinSixCharacter() {
    let isValid = true;

    if (this.credentials.pin.length < 6) isValid = false;

    const message = isValid ? "" : `pin უნდა შეადგენდეს მინ. 6 სიმბოლოს.`;

    if (!isValid && !this.error.pin.hasError) {
      this.error.hasError = true;
      this.error.pin = {
        hasError: true,
        message,
      };
    }

    return this;
  }
}
