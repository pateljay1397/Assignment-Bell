import "./styles.css";
import React, { useEffect } from "react";
import { Header } from "./modules";
import { getMedias } from "../api/";

export default function App() {
  useEffect(() => {
    getMedias().then(console.log).catch(console.error);
  });
  return (
    <>
      <Header />
      <main>{/** code */}</main>
    </>
  );
}
