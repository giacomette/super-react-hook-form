import { getRuleObject } from ".";

export function max(validation: string, label: string, maxMessage?: string) {
  const message =
    maxMessage ??
    `O valor máximo para ${label ?? "este campo"} é ${validation}.`;

  return typeof validation === "object"
    ? validation
    : getRuleObject(validation, message);
}
