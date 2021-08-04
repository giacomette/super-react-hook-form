import { getRuleObject } from ".";

export function minLength(
  validation: string,
  label?: string,
  minLengthMessage?: string
) {
  const message =
    minLengthMessage ??
    `O limite mínimo de tamanho para ${
      label ?? "este campo"
    } é ${validation}.`;

  return typeof validation === "object"
    ? validation
    : getRuleObject(validation, message);
}
