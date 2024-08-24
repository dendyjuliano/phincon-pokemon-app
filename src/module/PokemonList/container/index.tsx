import React, { useState, useEffect } from "react";
import PokemonListComponent from "../components";
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../../../service/PokemonService";
import { PaginatedPokemonResponse } from "../../../interface";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<PaginatedPokemonResponse | null>(
    null
  );
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(12);

  const { data, isLoading, error } = useQuery<PaginatedPokemonResponse, Error>({
    queryKey: ["pokemons", page, limit],
    queryFn: () => getPokemons(page, limit),
  });

  useEffect(() => {
    if (data) {
      setPokemons(data);
    }
  }, [data]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <PokemonListComponent
      pokemons={pokemons?.pokemons || []}
      currentPage={pokemons?.currentPage || 1}
      totalPages={pokemons?.totalPages || 1}
      onPageChange={setPage}
      isLoading={isLoading}
    />
  );
}
