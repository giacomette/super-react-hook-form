import { max } from "../max";

describe("#max()", () => {
  test("Deve formatar um retorno de validação padrão caso uma mensagem customizada não seja informada", () => {
    const expected = {
      value: "10",
      message: "O valor máximo para Número de telefone é 10.",
    };

    const result = max("10", "Número de telefone");

    expect(result).toEqual(expected);
  });

  test("Deve formatar um retorno de validação customizada", () => {
    const expected = {
      value: "10",
      message: "Porfavor, informe um número corretamente",
    };

    const result = max(
      "10",
      "Número de telefone",
      "Porfavor, informe um número corretamente"
    );

    expect(result).toEqual(expected);
  });

  test("Deve formatar um retorno de validação sem uma label informada", () => {
    const expected = {
      value: "10",
      message: "O valor máximo para este campo é 10.",
    };

    const result = max("10");

    expect(result).toEqual(expected);
  });
});
