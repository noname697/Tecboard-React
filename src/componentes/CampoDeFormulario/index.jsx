import "./campo-de-formulario.estilos.css";

export const CampoDeFormulario = ({ children }) => {
  return <fieldset className="campo-form">{children}</fieldset>;
};
