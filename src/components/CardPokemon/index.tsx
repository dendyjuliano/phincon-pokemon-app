import React from "react";
import { Button, Card, Badge } from "antd";
import styles from "./styles.module.css";
import { PokemonProps } from "../../interface";

type CardPokemonProps = {
  pokemon: PokemonProps;
};

export default function CardPokemon({ pokemon }: CardPokemonProps) {
  return (
    <Card
      cover={<img alt="example" src={pokemon.imageUrl} />}
      actions={[
        <Button type="primary" block>
          Detail
        </Button>,
      ]}
    >
      <div className={styles.wrapperBody}>
        <p className={styles.pokemonName}>{pokemon.name}</p>
        <div
          style={{ fontSize: "14px", lineHeight: "1.5" }}
          dangerouslySetInnerHTML={{
            __html: pokemon.description,
          }}
        ></div>
        <div className={styles.wrapperTypes}>
          <p className={styles.pokemonAbilities}>Types :</p>
          <div className={styles.wrapperContentTypes}>
            {pokemon.types.map((item, index) => (
              <Badge count={item} color="#2D6FB6" key={index} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
