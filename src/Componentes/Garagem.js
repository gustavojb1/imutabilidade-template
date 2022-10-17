import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import { useState } from "react";

function Garagem(props) {
  const [automovel0, setAutomovel0] = useState({
    cor: "rosa",
    ano: 2030,
    flex: "as vezes"
  });
  const [automovel1, setAutomovel1] = useState({
    cor: "preto",
    ano: 2031,
    flex: "sim"
  });
  const [automovel2, setAutomovel2] = useState({
    cor: "amarelo",
    ano: 2032,
    flex: "sim"
  });
  const [automovel3, setAutomovel3] = useState({
    cor: "cinza",
    ano: 2033,
    flex: "não"
  });

  const mudarAutomovel = () => {
    setAutomovel0({
      ...automovel0,
      cor: "LILAS"
    });
  };
  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel0.cor}
        ano={automovel0.ano}
        flex={automovel0.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel1.cor}
        ano={automovel1.ano}
        flex={automovel1.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex}
      />
      <Button onClick={props.mudarNome}>Mudar Nome</Button>
      <Button onClick={mudarAutomovel}>Mudar Cor do primeiro carro</Button>
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;
