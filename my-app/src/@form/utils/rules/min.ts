import { getRuleObject } from ".";

export function min(validation: any, label?: string, minMessage?: string) {
  const message =
    minMessage ??
    `O valor mínimo para ${label ?? "este campo"} é ${validation}.`;

  return typeof validation === "object"
    ? validation
    : getRuleObject(validation, message);
}
