import { Fieldset, InputMask, Select, SelectSimple } from "../../@form";
import Field from "../../@form/Field";

import { Box, Divider } from "@chakra-ui/react";
import { Row, Col } from "react-flexbox-grid";
import { useFormState } from "react-hook-form";
import ButtonPrimary from "../../@form/ButtonPrimary";

const validaBim = (cod: string, codConfirm: string) => {
 
  if (cod && cod !== codConfirm) {
    return "Informe o bim corretamente";
  }

  return null;
};

const formatError = (error: any) => {

  let result = null;

  const keys = Object.keys(error);

  return result;
}

function DadosCliente({ control, watch }: any) {

  return (
    <Fieldset
      title="Dados do cliente"
      description="Todos os campos são de preenchimento obrigatório"
    >
      <Box>
        <Field
          required
          control={control}
          label="Nome do comprador"
          name="nome"
        />
      </Box>

      <Box>
        <Row>
          <Col md={4}>
            <Field
              required
              control={control}
              label="Código Carteirinha"
              name="cod"
            />
          </Col>

          <Col md={4}>
            <Field
              required
              customError={validaBim(watch("cod"), watch("cod2"))}
              control={control}
              label="Confirme Código Carteirinha"
              name="cod2"
            />
          </Col>
        </Row>
      </Box>
      <Box>
        <Row>
          <Col md={4} sm={6}>
            <Field
              required
              as={SelectSimple}
              control={control}
              label="Tipo de documento"
              name="tipoDocumento"
            />
          </Col>
          <Col md={2} sm={6}>
            <Field
              required
              control={control}
              label="Documento"
              name="documento"
            />
          </Col>

          <Col md={2} sm={4}>
            <Field
              required
              as={SelectSimple}
              customProps={{
                options: [
                  {
                    label: "SSP",
                    value: "ssp",
                  },
                  {
                    label: "SSP 2",
                    value: "ssp 2",
                  },
                ],
              }}
              control={control}
              label="Emissor"
              name="emissor"
            />
          </Col>

          <Col md={2} sm={4}>
            <Field
              required
              as={Select}
              customProps={{
                options: [
                  {
                    label: "SP",
                    value: "sp",
                  },
                  {
                    label: "SC",
                    value: "sc",
                  },
                  {
                    label: "MT",
                    value: "mt",
                  },
                ],
              }}
              control={control}
              label="UF Emissor"
              name="ufEmissor"
            />
          </Col>

          <Col md={2} sm={4}>
            <Field
              required="Porfavor, informe a data corretamente"
              control={control}
              customProps={{
                type: "date",
              }}
              label="Data nascimento"
              name="dataNascimento"
            />
          </Col>
        </Row>
      </Box>

      <Divider />

      <Box mt="24px">
        <Row>
          <Col md={2} sm={4}>
            <Field
              as={InputMask}
              required
              control={control}
              label="CEP"
              name="cep"
              customProps={{
                mask: "99999-999",
                maskChar: null,
              }}
            />
          </Col>
          <Col md={1} sm={9}>
            <Box pt={"16rem 16em"}>
              <ButtonPrimary title="Buscar" color={"red"} />
            </Box>
          </Col>

          <Col md={2} sm={9}>
            <Field
              required
              control={control}
              label="Endereço"
              name="endereco"
            />
          </Col>
          <Col md={1} sm={3}>
            <Field
              min={{
                value: 10,
                message: "Posha, informe um negocio maior que 10",
              }}
              control={control}
              label="Número"
              name="numero"
            />
          </Col>
          <Col md={2} sm={6}>
            <Field
              required
              control={control}
              label="Complemento"
              name="complemento"
            />
          </Col>
          <Col md={2}>
            <Field required control={control} label="Bairro" name="bairro" />
          </Col>
          <Col md={2}>
            <Field required control={control} label="Cidade" name="cidade" />
          </Col>
          <Col md={1}>
            <Field required control={control} label="UF" name="uf" />
          </Col>
        </Row>
      </Box>

      <Divider />

      <Box mt="24px">
        <Row>
          <Col md={3} sm={4}>
            <Field required control={control} label="Contato" name="contato" />
          </Col>

          <Col md={1} sm={3}>
            <Field required control={control} label="DDD" name="ddd" />
          </Col>

          <Col md={3} sm={5}>
            <Field
              required
              control={control}
              label="Telefone"
              name="telefone"
            />
          </Col>
        </Row>
      </Box>
    </Fieldset>
  );
}

export default DadosCliente;
