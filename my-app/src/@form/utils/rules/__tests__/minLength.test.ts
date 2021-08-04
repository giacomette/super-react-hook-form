import { minLength } from "../minLength"; 

describe("#minLength()", () => {
  test("Deve formatar um retorno de validação padrão caso uma mensagem customizada não seja informada", () => {
    const expected = {
      value: "10",
      message: "O limite mínimo de tamanho para Número de telefone é 10.",
    };

    const result = minLength("10", "Número de telefone");

    expect(result).toEqual(expected);
  });

  test("Deve formatar um retorno de validação customizada", () => {
    const expected = {
      value: "10",
      message: "Porfavor, informe um número corretamente com valor mínimo",
    };

    const result = minLength(
      "10",
      "Número de telefone",
      "Porfavor, informe um número corretamente com valor mínimo"
    );

    expect(result).toEqual(expected);
  });
});
