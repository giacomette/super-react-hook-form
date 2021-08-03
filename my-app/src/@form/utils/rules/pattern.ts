import { getRuleObject } from ".";

export function pattern(validation: any, label: string, patterMessage: string) {
  const message =
    patterMessage ??
    `O formado ${label ? `de ${label}` : "do campo"} está incorreto.`;

  return typeof validation === "object"
    ? validation
    : getRuleObject(validation, message);
}
