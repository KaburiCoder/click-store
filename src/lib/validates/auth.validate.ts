import { compare } from "bcrypt";

export async function loginValidate(
  inputId: string,
  inputPassword: string,
  encryptedPassword?: string,
) {
  if (!inputId) {
    throw new Error("아이디를 입력하세요.");
  }

  if (!inputPassword) {
    throw new Error("비밀번호를 입력하세요.");
  }

  const success = await comparePassword(inputPassword, encryptedPassword ?? "");
  if (!success) {
    throw new Error("아이디 혹은 비밀번호가 잘못되었습니다.");
  }
}

export async function comparePassword(
  inputPassword: string,
  encryptedPassword: string,
) {
  return await compare(inputPassword, encryptedPassword);
}
