import { required } from "../required";

describe("#required()", () => {
  test("Deve formatar um retorno de validação padrão caso uma mensagem customizada não seja informada", () => {
    const expected = {
      value: true,
      message: "O Número de telefone deve ser preenchido!",
    };

    const result = required(true, "Número de telefone");

    expect(result).toEqual(expected);
  });

  test("Deve formatar um retorno de validação customizada", () => {
    const expected = {
      value: true,
      message: "Inform isso porfavor",
    };

    const result = required("Inform isso porfavor", "Número de telefone");

    expect(result).toEqual(expected);
  });
});
