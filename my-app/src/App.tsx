import { useForm } from "react-hook-form";

import Form, { Select } from "./@form";
import Field from "./@form/Field";

import "./App.css";

function App() {
  const methods = useForm();
  const { control, watch } = methods;

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="App">
      <h1>Forms - {watch("nome")}</h1>
      <Form onSubmit={onSubmit} methods={methods}>
        <Field required control={control} label="Nome" name="nome" />

        {/* <Field required control={methods.control} as={Select} name="nome3" /> */}
        <button>enviar</button>
      </Form>
    </div>
  );
}

export default App;
