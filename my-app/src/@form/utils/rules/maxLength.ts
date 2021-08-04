import { getRuleObject } from ".";

export function maxLength(
  validation: string,
  label?: string,
  maxLengthMessage?: string
) {
  const message =
    maxLengthMessage ??
    `O limite máximo de tamanho para ${
      label ?? "este campo"
    } é ${validation}.`;

  return typeof validation === "object"
    ? validation
    : getRuleObject(validation, message);
}
