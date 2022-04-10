import "./styles.css";
import React, { useEffect } from "react";
import { Header } from "./modules";
import { getComedies } from "../api/";

export default function App() {
  useEffect(() => {
    getComedies().then(console.log).catch(console.error);
  });
  return (
    <>
      <Header />
      <main>{/** code */}</main>
    </>
  );
}
