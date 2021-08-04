import {
  Fieldset, 
  RadioGroup,
  SelectSimple,
} from "../../@form";
import Field from "../../@form/Field";

import { Box, Divider } from "@chakra-ui/react";
import { Row, Col } from "react-flexbox-grid";
import SelectUf from "../Inputs/SelectUf";

function DadosReceita({ control }: any) {
  return (
    <Fieldset
      title="Dados do receita"
      description="Todos os campos habilitados são de preenchimento obrigatório"
    >
      <Box>
        <Row>
          <Col md={3}>
            <Field
              required
              control={control}
              label="Nome do paciente"
              name="paciente.nome"
            />
          </Col>

          <Col md={2}>
            <Field
              required
              control={control}
              customProps={{
                type: "date",
              }}
              label="Data nascimento"
              name="paciente.dataNascimento"
            />
          </Col>
          <Col md={2}>
            <Field
              as={SelectSimple}
              customProps={{
                options: [
                  {
                    label: "Selecione",
                    value: "",
                  },
                  {
                    label: "Masculino",
                    value: "m",
                  },
                  {
                    label: "Feminino",
                    value: "f",
                  },
                ],
              }}
              control={control}
              label="Sexo"
              name="paciente.sexo"
            />
          </Col>
          <Col md={2}>
            <Field
              required
              control={control}
              label="Nº da notificação"
              name="numeroNotificacao"
            />
          </Col>
        </Row>
      </Box>

      <Divider />

      <Box mt="24px">
        <Row>
          <Col md={2}>
            <Field
              as={SelectSimple}
              customProps={{
                options: [
                  {
                    label: "Selecione",
                    value: "",
                  },
                  {
                    label: "Conselho 1",
                    value: "Conselho 1",
                  },
                  {
                    label: "Conselho 2",
                    value: "Conselho 2",
                  },
                ],
              }}
              control={control}
              label="Conselho"
              name="conselho"
            />
          </Col>

          <Col md={3} sm={9}>
            <Field
              required
              control={control}
              label="Nº ou nome"
              name="numeroNome"
            />
          </Col>

          <Col md={2}>
            <Field
              label="UF"
              as={SelectUf}
              control={control}
              name="paciente.uf"
            />
          </Col>

          <Col md={4}>
            <Field
              as={SelectSimple}
              customProps={{
                options: [
                  {
                    label: "",
                    value: "",
                  },
                  {
                    label: "MT",
                    value: "mt",
                  },
                  {
                    label: "SP",
                    value: "sp",
                  },
                ],
              }}
              control={control}
              label="Médico"
              name="paciente.medico"
            />
          </Col>

          <Col md={2}>
            <Field
              required
              control={control}
              customProps={{
                type: "date",
              }}
              label="Data da receita"
              name="paciente.dataReceita"
            />
          </Col>
        </Row>
      </Box>

      <Divider />

      <Box mt="24px">
        <Row>
          <Col md={3}>
            <Field
              as={RadioGroup}
              required
              customProps={{
                options: [
                  {
                    label: "Sim",
                    value: "1",
                  },
                  {
                    label: "Não",
                    value: "0",
                  },
                ],
              }}
              name="receitaDigital"
              label="Receita digital?"
            />
          </Col>
          <Col md={3}>
            <Field
              as={SelectSimple}
              customProps={{
                options: [
                  {
                    label: "Selecione",
                    value: "",
                  },
                  {
                    label: "Tipo 1",
                    value: "Tipo 1",
                  },
                  {
                    label: "Tipo 2",
                    value: "Tipo 2",
                  },
                ],
              }}
              control={control}
              label="Tipo de receita digital"
              name="tipoReceitaDigital"
            />
          </Col>
        </Row>
      </Box>
    </Fieldset>
  );
}

export default DadosReceita;
