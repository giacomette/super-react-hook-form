import { useForm } from "react-hook-form";

import Form from "./@form";

import { Container } from "react-bootstrap";

import "./App.css";

import DadosCliente from "./components/DadosCliente";

function App() {
  const methods = useForm();
  const { control } = methods;

  const onSubmit = (data: any) => console.log("valores validos", data);

  return (
    <div className="App">
      <h1>Forms</h1>
      <Form primaryColor={"#008094"} onSubmit={onSubmit} methods={methods}>
        <DadosCliente control={control} />
      </Form>
    </div>
  );
}

export default App;
