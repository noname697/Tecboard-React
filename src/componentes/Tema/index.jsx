import "./tema.estilos.css";

export const Tema = ({ tema }) => {
  return <h3 className="titulo-tema">{tema.nome}</h3>;
};
