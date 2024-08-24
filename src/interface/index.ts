export interface PokemonProps {
  id: number;
  name: string;
  nickname?: string;
  imageUrl: string;
  height: number;
  weight: number;
  types: string[];
  abilities: any[];
  description: string;
}

export interface PaginatedPokemonResponse {
  currentPage: number;
  totalPages: number;
  pokemons: PokemonProps[];
}
