import { max } from "./rules/max";
import { min } from "./rules/min";
import { pattern } from "./rules/pattern";
import { required } from "./rules/required";
import { maxLength } from "./rules/maxLength";
import { minLength } from "./rules/minLength";

export default function extractRules(props: any) {
  const rules: any = {};

  if (props.required !== undefined) {
    rules.required = required(props.required, props.label);
  }

  if (props.min !== undefined) {
    rules.min = min(props.min, props.label, props.minMessage);
  }

  if (props.max !== undefined) {
    rules.max = max(props.max, props.label, props.maxMessage);
  }

  if (props.minLength !== undefined) {
    rules.minLength = minLength(props.minLength, props.label, props.minMessage);
  }

  if (props.maxLength !== undefined) {
    rules.maxLength = maxLength(props.maxLength, props.label, props.maxMessage);
  }

  if (props.pattern !== undefined) {
    rules.pattern = pattern(props.pattern, props.label, props.patternMessage);
  }

  if (props.validade !== undefined) {
    rules.pattern = props.validade;
  }

  return rules;
}
