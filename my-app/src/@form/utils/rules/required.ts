import { getRuleObject } from "./index";

export function required(validation: any, label: string) {
  const message =
    typeof validation === "string"
      ? validation
      : `O ${label ?? "campo"} deve ser preenchido!`;

  return typeof validation === "object"
    ? validation
    : getRuleObject(!!validation, message);
}
