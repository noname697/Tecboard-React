import "./App.css";

const TituloFormulario = (props) => {
  return <h2>{props.children}</h2>;
};

const CampoDeFormulario = ({ children }) => {
  return <fieldset>{children}</fieldset>;
};

const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

const CampoDeEntrada = (props) => {
  return <input {...props} />;
};

const FormularioDeEvento = () => {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
      </CampoDeFormulario>
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
