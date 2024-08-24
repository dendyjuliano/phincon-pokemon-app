import React, { useState, useEffect } from "react";
import MyPokemonListComponent from "../components";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getMyPokemons,
  renamePokemon,
  releasePokemon,
} from "../../../service/MyPokemonService";
import { PokemonProps } from "../../../interface";
import ModalCaught from "../../../components/ModalCaught";
import { showNotification } from "../../../utils";

export default function MyPokemonList() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonProps | null>(
    null
  );
  const [newNickName, setNewNickname] = useState<string>("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => getMyPokemons(),
  });

  const { mutate: mutateRenamePokemon, isPending: isLoadingRename } =
    useMutation({
      mutationFn: renamePokemon,
      onSuccess: (data) => {
        showNotification({
          type: "success",
          title: "Congratulations",
          content: data.message,
        });
        handleResetDelete();
        refetch();
      },
      onError: (error) => {
        showNotification({
          type: "error",
          title: "Error",
          content: `An error occurred: ${error.message}`,
        });
      },
    });

  const { mutate: mutateReleasePokemon, isPending: isLoadingRelease } =
    useMutation({
      mutationFn: releasePokemon,
      onSuccess: (data) => {
        if (data.success) {
          showNotification({
            type: "success",
            title: "Success",
            content: data.message,
          });
          handleResetDelete();
          refetch();
        } else {
          showNotification({
            type: "error",
            title: "Failed",
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

  useEffect(() => {
    if (data) {
      setPokemons(data);
    }
  }, [data]);

  const handleClickEdit = (id: number) => {
    setSelectedId(id);
    const selectedPokemon = pokemons.find((value) => value.id === id);
    if (selectedPokemon) {
      setSelectedPokemon(selectedPokemon);
    }
  };

  const handleResetDelete = () => {
    setSelectedId(null);
    setSelectedPokemon(null);
  };

  const handleSaveRename = () => {
    mutateRenamePokemon({
      nickname: selectedPokemon?.nickname || "",
      newNickname: newNickName,
    });
  };

  const handleRelease = (nickname: string) => {
    mutateReleasePokemon(nickname);
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <MyPokemonListComponent
        pokemons={pokemons}
        isLoading={isLoading || isLoadingRelease}
        onSelectId={handleClickEdit}
        onClickRelease={handleRelease}
      />
      <ModalCaught
        isRename
        isLoading={isLoadingRename}
        nickname={newNickName}
        onChange={setNewNickname}
        show={!!selectedId}
        pokemon={selectedPokemon}
        onCancel={handleResetDelete}
        onClickSave={handleSaveRename}
      />
    </>
  );
}
