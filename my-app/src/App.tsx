import { useForm } from "react-hook-form";

import Form from "./@form";

import "./App.css";

import DadosCliente from "./components/DadosCliente";
import DadosReceita from "./components/DadosReceita";

function App() {
  const methods = useForm();
  const { control } = methods;

  const onSubmit = (data: any) => console.log("valores validos", data);

  return (
    <div className="App">
      <Form
        generateButtons={{
          okTitle: "Imprimir",
        }}
        primaryColor={"#008094"}
        onSubmit={onSubmit}
        methods={methods}
      >
        <DadosCliente control={control} />
        <DadosReceita control={control} />
      </Form>
    </div>
  );
}

export default App;
