import React from "react";
import { Tabs } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import Template from "../../../components/Template";
import PokemonList from "../../PokemonList/container";
import MyPokemonList from "../../MyPokemonList/container";

export default function HomeComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  return (
    <Template>
      <img src="/assets/pokemon-banner.webp" className={styles.banner} alt="" />
      <Tabs
        activeKey={currentPath}
        defaultActiveKey="/"
        onChange={(key) => navigate(key)}
        centered
        items={[
          {
            label: `Pokemon List`,
            key: "/",
            children: <PokemonList />,
          },
          {
            label: `My Pokemon`,
            key: "/my-pokemon",
            children: <MyPokemonList />,
          },
        ]}
      />
    </Template>
  );
}
