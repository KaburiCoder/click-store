import { validPassword } from "kbr-validator";

function validateField(field: string, value: string) {
  const { errorMessage } = validPassword(value);
  if (errorMessage) {
    return {
      errors: {
        [field]: [errorMessage],
      },
    };
  }
}

export function checkConfirmPassword(
  password: string,
  confirmPassword: string,
) {
  if (password !== confirmPassword) {
    const message = "비밀번호와 비밀번호 재확인이 다릅니다.";
    return {
      errors: {
        password: [message],
        confirmPassword: [message],
      },
    };
  }
}

export function checkValidatePassword(
  password: string,
  confirmPassword: string,
) {
  let validResult = validateField("password", password);
  if (validResult) {
    return validResult;
  }

  validResult = validateField("confirmPassword", confirmPassword);
  if (validResult) {
    return validResult;
  }
}
