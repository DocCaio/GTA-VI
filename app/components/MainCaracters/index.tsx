import Image from "next/image";
import dados from "../../data/MainCaracters/dados.json";

interface Personagem {
  id: number;
  nome: string;
  desejo: string;
  sobre: string;
  image: string;
}

const MainCaracters = () => {
  return (
    <div>
      <span>Quem são Jason e Lucia?</span>
      <h2>Conheça nossos protagonistas</h2>

      {dados.personagens.map((personagem: Personagem) => (
        <div key={personagem.id}>
          <h2>{personagem.nome}</h2>
          <span>{personagem.desejo}</span>
          <p>{personagem.sobre}</p>

          <Image
            src={personagem.image}
            alt={personagem.nome}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  );
};

export default MainCaracters;
