import React from "react";
import { Tabs } from "antd";

import styles from "./styles.module.css";
import Template from "../../../components/Template";
import PokemonList from "../../PokemonList/container";

export default function HomeComponent() {
  return (
    <Template>
      <img src="/assets/pokemon-banner.webp" className={styles.banner} alt="" />
      <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: `Pokemon List`,
            key: "1",
            children: <PokemonList />,
          },
          {
            label: `My Pokemon`,
            key: "2",
            children: `Content of Tab My `,
          },
        ]}
      />
    </Template>
  );
}
