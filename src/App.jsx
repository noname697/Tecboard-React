import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
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

  const [eventos, setEventos] = useState([
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
    },
  ]);

  const adicionarEvento = (evento) => {
    setEventos([...eventos, evento]);
  };

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />
      <section className="container">
        {temas.map((tema) => {
          if (!eventos.some((evento) => evento.tema.id === tema.id)) {
            return null;
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className="eventos">
                {eventos
                  .filter((evento) => evento.tema.id === tema.id)
                  .map((evento, index) => (
                    <CardEvento key={index} evento={evento} />
                  ))}
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
};

export default App;
