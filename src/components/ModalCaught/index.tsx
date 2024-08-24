import React, { useEffect } from "react";
import { Modal, Flex, Input } from "antd";

import styles from "./styles.module.css";
import { PokemonProps } from "../../interface";

type ModalCaughtProps = {
  show: boolean;
  nickname?: string;
  onChange?: (value: string) => void;
  onClickSave?: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
  isRename?: boolean;
  pokemon: PokemonProps | null;
};

export default function ModalCaught({
  show = false,
  nickname,
  onChange = () => undefined,
  onClickSave,
  onCancel,
  isLoading = false,
  isRename = false,
  pokemon,
}: ModalCaughtProps) {
  useEffect(() => {
    return () => {
      onChange("");
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      title="Pokemon caught"
      open={show}
      okText="Save"
      onOk={onClickSave}
      onCancel={onCancel}
      loading={isLoading}
    >
      <Flex vertical gap={8} align="center">
        {/* eslint-disable-next-line */}
        <img src={pokemon?.imageUrl} className={styles.imgPokemon} alt="" />
        <p className={styles.desc}>
          {isRename
            ? `Enter a different nickname from ${pokemon?.nickname}`
            : `Congratulations you got a ${pokemon?.name}, enter a nickname for your
          Pokemon`}
        </p>
        <Input
          placeholder={isRename ? "Enter New Nickname" : "Enter Nickname"}
          value={nickname}
          onChange={(e) => onChange(e.target.value)}
        />
      </Flex>
    </Modal>
  );
}
