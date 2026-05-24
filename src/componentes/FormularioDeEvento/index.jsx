import "./formulario-de-evento.estilos.css";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export const FormularioDeEvento = ({ temas }) => {
  const handleSubmit = (formData) => {
    const evento = {
      capa: formData.get("capa"),
      tema: temas.find((tema) => tema.id === Number(formData.get("tema"))),
      data: new Date(formData.get("dataEvento")),
      titulo: formData.get("nome"),
    };
  };

  return (
    <form className="form-evento" action={handleSubmit}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nome"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="https://..."
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
        <div className="acoes">
          <Botao>Criar Evento</Botao>
        </div>
      </div>
    </form>
  );
};
