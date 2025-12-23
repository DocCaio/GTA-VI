import Link from "next/link";
import Image from "next/image";
import dados from "../../../data/places.json";
import { Lugares } from "@/app/types/places";

const Places = () => {
  return (
    <div>
      {dados.places.map((place: Lugares) => (

        <div key={place.id}>
          <Image
            src={place.image}
            alt={place.atl || "Place image"}
            width={300}
            height={300}
          />

          <Link href={place.link}>
            {place.nome}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Places;
