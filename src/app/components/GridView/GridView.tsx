"use client";

import { IGridView } from "@/app/utils/interfaces";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Pokemon } from "@/app/utils/types";
import Image from "next/image";

const GridView: React.FC<IGridView> = ({ pokemons }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPokemons = useMemo(
    () =>
      pokemons.filter((pokemon: Pokemon) => {
        if (pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return pokemon;
        }
      }),
    [searchQuery, pokemons]
  );

  return (
    <React.Fragment>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[calc(100vh-150px)] overflow-y-auto">
        {filteredPokemons.map((pokemon) => (
          <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <div className="p-4 bg-gray-800 text-white rounded-lg hover:scale-105 transition">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                height={300}
                width={300}
                className="object-contain"
                priority
              />
              <h3 className="text-center mt-2 capitalize">{pokemon.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default GridView;
