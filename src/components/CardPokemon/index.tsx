import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Badge } from "antd";
import { DeleteOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";

import styles from "./styles.module.css";
import { PokemonProps } from "../../interface";
import { showNotification } from "../../utils";

type CardPokemonProps = {
  pokemon: PokemonProps;
  isSelected?: boolean;
  onClickEdit?: (id: number) => void;
  onClickRelease?: (nickname: string) => void;
};

export default function CardPokemon({
  pokemon,
  isSelected = false,
  onClickEdit = () => undefined,
  onClickRelease = () => undefined,
}: CardPokemonProps) {
  const navigate = useNavigate();

  return (
    <Card
      cover={<img alt="example" src={pokemon.imageUrl} />}
      actions={[
        <Button
          type="primary"
          onClick={() => navigate(`/pokemon/${pokemon.id}`)}
          icon={<EyeOutlined />}
          block={!isSelected}
        >
          {!isSelected && "Detail"}
        </Button>,
        ...(isSelected
          ? [
              <Button
                type="default"
                onClick={() => onClickEdit(pokemon.id)}
                icon={<EditOutlined />}
              />,
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() =>
                  showNotification({
                    type: "confirm",
                    title: `Do you want to release ${
                      pokemon?.nickname || pokemon.name
                    }?`,
                    onOk: () => onClickRelease(pokemon?.nickname || ""),
                  })
                }
              />,
            ]
          : []),
      ]}
    >
      <div className={styles.wrapperBody}>
        <div>
          <p className={styles.pokemonName}>
            {pokemon.nickname ? pokemon.nickname : pokemon.name}
          </p>
          {pokemon.nickname && (
            <p style={{ color: "#9b9b9b" }}>({pokemon.name})</p>
          )}
        </div>
        <div
          style={{
            fontSize: "14px",
            lineHeight: "1.5",
            color: "#9b9b9b",
            fontWeight: 500,
          }}
          dangerouslySetInnerHTML={{
            __html: pokemon.description,
          }}
        ></div>
        {pokemon?.types?.length > 0 && (
          <div className={styles.wrapperTypes}>
            <p className={styles.pokemonAbilities}>Types :</p>
            <div className={styles.wrapperContentTypes}>
              {pokemon?.types.map((item, index) => (
                <Badge count={item} color="#2D6FB6" key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
