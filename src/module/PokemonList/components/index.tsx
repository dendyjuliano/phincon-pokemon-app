import React from "react";
import { List, Col, Spin } from "antd";
import CardPokemon from "../../../components/CardPokemon";
import styles from "./styles.module.css";
import { PokemonProps } from "../../../interface";

type PokemonListComponentProps = {
  pokemons: any[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
};

export default function PokemonListComponent({
  pokemons,
  currentPage,
  totalPages,
  onPageChange,
  isLoading = false,
}: PokemonListComponentProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tagLine}>
        <h2>let's go catch pokemon</h2>
      </div>

      <List
        grid={{ gutter: [16, 16], column: 4 }}
        dataSource={pokemons}
        pagination={{
          current: currentPage,
          total: totalPages * 12,
          onChange: onPageChange,
          pageSize: 12,
          align: "center",
        }}
        loading={isLoading}
        renderItem={(item: PokemonProps) => (
          <Col>
            <CardPokemon pokemon={item} />
          </Col>
        )}
      />
    </div>
  );
}
