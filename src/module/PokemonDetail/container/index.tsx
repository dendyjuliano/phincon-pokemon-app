import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import PokemonDetailComponent from "../components";
import {
  getPokemonDetail,
  catchPokemon,
} from "../../../service/PokemonService";
import { addPokemon } from "../../../service/MyPokemonService";
import { PokemonProps } from "../../../interface";
import { showNotification } from "../../../utils";
import ModalCaught from "../../../components/ModalCaught";

export default function PokemonDetail() {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const [pokemon, setPokemon] = useState<PokemonProps | null>(null);
  const [showCaught, setShowCaught] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

  const { data, isLoading } = useQuery<PokemonProps, Error>({
    queryKey: ["pokemonDetail", id],
    queryFn: () => getPokemonDetail(Number(id)),
    enabled: !!id,
  });

  const { mutate: mutateCatch, isPending: isLoadingCatch } = useMutation({
    mutationFn: catchPokemon,
    onSuccess: (data) => {
      if (data.success) {
        setShowCaught(!showCaught);
      } else {
        showNotification({
          type: "warning",
          title: "Warning",
          content: data.message,
        });
      }
    },
    onError: (error) => {
      showNotification({
        type: "error",
        title: "Error",
        content: `An error occurred: ${error.message}`,
      });
    },
  });

  const { mutate: mutateAddPokemon, isPending: isLoadingAdd } = useMutation({
    mutationFn: addPokemon,
    onSuccess: (data) => {
      showNotification({
        type: "success",
        title: "Congratulations",
        content: data.message,
      });
      setShowCaught(!showCaught);
      navigate(`/my-pokemon`);
    },
    onError: (error) => {
      showNotification({
        type: "error",
        title: "Error",
        content: `An error occurred: ${error.message}`,
      });
    },
  });

  useEffect(() => {
    if (data) {
      setPokemon(data);
    }
  }, [data]);

  const handleAddPokemon = () => {
    mutateAddPokemon({
      id: (id || 0) as number,
      nickname,
    });
  };

  return (
    <>
      <PokemonDetailComponent
        pokemon={pokemon}
        isLoading={isLoading}
        mutateCatch={mutateCatch}
        isLoadingCatch={isLoadingCatch}
      />
      <ModalCaught
        show={showCaught}
        onCancel={() => setShowCaught(!showCaught)}
        nickname={nickname}
        onChange={setNickname}
        pokemon={pokemon}
        onClickSave={handleAddPokemon}
        isLoading={isLoadingAdd}
      />
    </>
  );
}
