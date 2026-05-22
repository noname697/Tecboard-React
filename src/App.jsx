import "./App.css";

const TituloFormulario = (props) => {
  return <h2>{props.children}</h2>;
};

const FormularioDeEvento = () => {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome" placeholder="Summer dev hits" />
      </fieldset>
    </form>
  );
};

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
