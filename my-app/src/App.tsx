import { useState } from "react";
import { useForm } from "react-hook-form";

import Form from "./@form";

import "./App.css";

import DadosCliente from "./components/DadosCliente";
import DadosReceita from "./components/DadosReceita";

function App() {
  const methods = useForm();
  const { control } = methods;
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log("valores validos", data);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div className="App">
      <Form
        isLoading={isLoading}
        generateButtons={{
          okTitle: "Imprimir",
        }}
        primaryColor={"#008094"}
        onSubmit={onSubmit}
        methods={methods}
      >
        <DadosCliente watch={methods.watch} control={control} />
        <DadosReceita control={control} />
      </Form>
    </div>
  );
}

export default App;
