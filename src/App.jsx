import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

const App = () => {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "backend",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]} />
        <Tema tema={temas[1]} />
        <Tema tema={temas[2]} />
        <Tema tema={temas[3]} />
        <Tema tema={temas[4]} />
        <Tema tema={temas[5]} />
      </section>
    </main>
  );
};

export default App;
