export interface PokemonProps {
  id: number;
  name: string;
  imageUrl: string;
  height: number;
  weight: number;
  types: string[];
  description: string;
}

export interface PaginatedPokemonResponse {
  currentPage: number;
  totalPages: number;
  pokemons: PokemonProps[];
}
