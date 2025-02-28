import { Pokemon } from "./types";

export interface IGridView {
  pokemons: Pokemon[];
}

export interface ISearchBar {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface IPokemonDetails {
  params: any;
}
