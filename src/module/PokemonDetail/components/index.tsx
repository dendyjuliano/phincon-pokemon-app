import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonProps } from "../../../interface";
import styles from "./styles.module.css";
import Template from "../../../components/Template";
import { Button, List, Row, Col, Badge, Spin } from "antd";

type PokemonDetailComponentProps = {
  pokemon: PokemonProps | null;
  isLoading: boolean;
  mutateCatch: () => void;
  isLoadingCatch: boolean;
};

export default function PokemonDetailComponent({
  pokemon,
  isLoading = false,
  isLoadingCatch = false,
  mutateCatch,
}: PokemonDetailComponentProps) {
  const navigate = useNavigate();

  return (
    <Template>
      <Spin spinning={isLoading}>
        <Row gutter={[26, 16]}>
          <Col md={8} style={{ width: "100%" }}>
            <img
              src={pokemon?.imageUrl}
              alt={pokemon?.name}
              className={styles.imgPokemon}
            />
          </Col>
          <Col md={16} className={styles.wrapperContentDetail}>
            <p className={styles.namePokemon}>{pokemon?.name}</p>
            <p className={styles.descriptionPokemon}>{pokemon?.description}</p>
            <div className={styles.wrapperContentTypes}>
              {pokemon?.types.map((type, index) => (
                <Badge key={index} count={type} color="#2D6FB6" />
              ))}
            </div>
            <List
              style={{ width: "100%" }}
              itemLayout="horizontal"
              dataSource={pokemon?.abilities}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    <p className={styles.nameEffect}>{item.name}</p>
                    {item.effects.map((effect: any, indexEffect: number) => (
                      <p className={styles.effect} key={indexEffect}>
                        {effect.short_effect}
                      </p>
                    ))}
                  </div>
                </List.Item>
              )}
            />

            <div style={{ display: "flex", gap: "16px" }}>
              <Button
                type="primary"
                onClick={mutateCatch}
                loading={isLoadingCatch}
              >
                Catch Pokemon
              </Button>
              <Button onClick={() => navigate(-1)}>Back</Button>
            </div>
          </Col>
        </Row>
      </Spin>
    </Template>
  );
}
