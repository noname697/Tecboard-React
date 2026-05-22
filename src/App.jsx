import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

const App = () => {
  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  );
};

export default App;
