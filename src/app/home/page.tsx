import GridView from "../components/GridView/GridView";
const HomePage: React.FC = async () => {
  const processPokemons = (apiData: any[]) => {
    let modifiedData: any[] = [];
    if (apiData && apiData.length > 0) {
      modifiedData = apiData.map((pokemon: any) => {
        const id = pokemon.url.split("/").filter(Boolean).pop();
        return {
          name: pokemon.name,
          id,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        };
      });
    }

    return modifiedData;
  };

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${150}`,
    {
      cache: "no-store",
    }
  );
  const apiData = await response.json();
  const pokemons = processPokemons(apiData.results);

  return (
    <main className="h-screen text-black p-6 w-full overflow-hidden">
      <div className="w-full px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Pokemon Explorer
        </h1>
        <GridView pokemons={pokemons} />
      </div>
    </main>
  );
};

export default HomePage;
