import axios from "axios";
import { BASE_URL } from "../utils";

export const addPokemon = async (data: { id: number; nickname: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/my-pokemons/add`, {
      id: data.id,
      nickname: data.nickname,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding Pokémon:", error);
    return error;
  }
};

export const getMyPokemons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/my-pokemons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching my Pokémon list:", error);
    return error;
  }
};

export const releasePokemon = async (nickname: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/my-pokemons/release`, {
      nickname,
    });
    return response.data;
  } catch (error) {
    console.error("Error releasing Pokémon:", error);
    return error;
  }
};

export const renamePokemon = async (data: {
  nickname: string;
  newNickname: string;
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/my-pokemons/rename`, {
      nickname: data.nickname,
      newNickname: data.newNickname,
    });
    return response.data;
  } catch (error) {
    console.error("Error renaming Pokémon:", error);
    return error;
  }
};
