import axios from "axios";
import { BASE_URL } from "../utils";

export const getPokemons = async (page: number, limit: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/pokemons?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    return error;
  }
};

export const getPokemonDetail = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pokemon details for ID ${id}:`, error);
    return error;
  }
};

export const catchPokemon = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/pokemons/catch`);
    return response.data;
  } catch (error) {
    console.error("Error catching pokemon:", error);
    return error;
  }
};
