import "./lista-suspensa.estilos.css";

export const ListaSuspensa = ({ itens, ...rest }) => {
  return (
    <select className="lista-suspensa-form" {...rest} defaultValue="">
      <option value="" disabled>
        Selecione uma opção
      </option>
      {itens.map((item) => (
        <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      ))}
    </select>
  );
};
