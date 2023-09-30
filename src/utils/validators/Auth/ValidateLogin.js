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
        key: "password",
        validationType: validationType.isPrimitive,
        rules: [Rules.notIsEmpty, Rules.isValidPassword],
      },
    ];

    this.error = {
      hasError: false,
      email: { hasError: false, message: "" },
      password: { hasError: false, message: "" },
    };
  }
}
