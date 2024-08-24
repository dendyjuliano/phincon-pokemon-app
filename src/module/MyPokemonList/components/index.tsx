import React from "react";
import { List, Col } from "antd";
import CardPokemon from "../../../components/CardPokemon";
import styles from "./styles.module.css";
import { PokemonProps } from "../../../interface";
import useBreakpoint from "../../../hooks/useBreakpoint";

type MyPokemonListComponentProps = {
  pokemons: any[];
  isLoading: boolean;
  onSelectId?: (value: number) => void;
  onClickRelease: (nickname: string) => void;
};

export default function MyPokemonListComponent({
  pokemons,
  onSelectId,
  isLoading = false,
  onClickRelease,
}: MyPokemonListComponentProps) {
  const { isDekstop } = useBreakpoint();
  return (
    <div className={styles.wrapper}>
      <List
        grid={{ gutter: [16, 16], column: isDekstop ? 4 : 2 }}
        dataSource={pokemons}
        loading={isLoading}
        renderItem={(item: PokemonProps) => (
          <Col>
            <CardPokemon
              pokemon={item}
              isSelected
              onClickEdit={onSelectId}
              onClickRelease={onClickRelease}
            />
          </Col>
        )}
      />
    </div>
  );
}
