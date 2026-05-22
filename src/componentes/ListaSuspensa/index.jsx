import "./lista-suspensa.estilos.css";

export const ListaSuspensa = (props) => {
  return (
    <select className="lista-suspensa-form" {...props}>
      <option value="">Selecione uma opção</option>
      <option value="">IA</option>
      <option value="">Front-end</option>
      <option value="">Backend</option>
      <option value="">DevOps</option>
      <option value="">Data Science</option>
      <option value="">Cloud</option>
    </select>
  );
};
