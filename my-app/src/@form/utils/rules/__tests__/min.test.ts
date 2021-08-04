import { max } from "../max";
import { min } from "../min";
import { maxLength } from "../maxLength";
import { required } from "../required";

describe("#min()", () => {
  test("Deve formatar um retorno de validação padrão caso uma mensagem customizada não seja informada", () => {
    const expected = {
      value: "10",
      message: "O valor mínimo para Número de telefone é 10.",
    };

    const result = min("10", "Número de telefone");

    expect(result).toEqual(expected);
  });

  test("Deve formatar um retorno de validação customizada", () => {
    const expected = {
      value: "10",
      message: "Porfavor, informe um número corretamente com valor mínimo",
    };

    const result = min(
      "10",
      "Número de telefone",
      "Porfavor, informe um número corretamente com valor mínimo"
    );

    expect(result).toEqual(expected);
  });

  test("Deve formatar um retorno de validação sem uma label informada", () => {
    const expected = {
      value: "10",
      message: "O valor mínimo para este campo é 10.",
    };

    const result = min("10");

    expect(result).toEqual(expected);
  });
});
