import { IPokemonDetails } from "@/app/utils/interfaces";
import Image from "next/image";

const PokemonDetails: React.FC<IPokemonDetails> = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <main className="h-screen text-black flex items-center justify-center p-10 w-full">
      <div className="w-full text-center p-6 h-full">
        <h1 className="text-4xl font-bold capitalize">{data.name}</h1>
        <Image
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
          height={500}
          width={500}
          className="mx-auto my-6"
          priority
        />

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Type</h2>
          <div className="flex justify-center gap-3 mt-2">
            {data.types.map((t: any) => (
              <span
                key={t.type.name}
                className="bg-blue-500 px-3 py-1 rounded-md text-white"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Abilities</h2>
          <div className="flex justify-center gap-3 mt-2">
            {data.abilities.map((a: any) => (
              <span
                key={a.ability.name}
                className="bg-green-500 px-3 py-1 rounded-md text-white"
              >
                {a.ability.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Stats</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {data.stats.map((s: any) => (
              <span
                key={s.stat.name}
                className="bg-gray-700 px-4 py-2 rounded-md text-white"
              >
                <p className="capitalize">
                  {s.stat.name}: {s.base_stat}
                </p>
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Moves</h2>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {data.moves.map((m: any) => (
              <span
                key={m.move.name}
                className="bg-red-500 px-3 py-1 rounded-md text-white"
              >
                {m.move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PokemonDetails;
