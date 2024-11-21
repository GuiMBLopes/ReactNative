import { StatusBar } from "expo-status-bar";
import { AnimalPage } from "./src/pages/AnimalPage";
import { Routers } from "./src/routes";
import { PessoaPage } from "./src/pages/PessoaPage";
import { CadastroLocal } from "./src/pages/CadastroLocal";
import { Login } from "./src/pages/Login";
import React from "react";
import CadastroUser from "./src/pages/CadastroUser";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#247BA0" />
      <Routers />
    </>
  );
}
