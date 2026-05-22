import "./label.estilos.css";

export const Label = ({ htmlFor, children }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
