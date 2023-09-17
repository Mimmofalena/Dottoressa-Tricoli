import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import styles from "../styles/globals.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import Footer from "../src/components/Footer/Footer";
import Servizi from "../src/components/Servizi/Servizi";
import DomandeFrequenti from "../src/components/DomandeFrequenti/DomandeFrequenti";

const App = (props) => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <Navbar></Navbar>

      <Servizi/>

      <DomandeFrequenti/>

      <p style={{ backgroundColor: "yellow", height: "400px" }} id="Servizi">
        SERVIZIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem
        lorem lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem
        lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
        loremlorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
        lorem lorem loremlorem lorem lorem lorem lorem lorem lorem
      </p>
      <p style={{ backgroundColor: "green", height: "400px" }} id="Curriculum">
        CURRICULUM lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem
        lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
        loremlorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
        lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem lorem
        lorem lorem lorem lorem lorem
      </p>
      <p style={{ backgroundColor: "pink", height: "400px" }} id="Contatti">
        CONTATTI lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem
        lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
        loremlorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem
        lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem lorem
        lorem lorem lorem lorem lorem
      </p>
      <IconButton color="inherit" onClick={scrollToTop}>
        <ArrowUpwardIcon fontSize="large" />
      </IconButton>
      <Footer/>
    </>
  );
};

export default App;
