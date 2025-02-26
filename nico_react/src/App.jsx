import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar_Componente } from "./Componentes/01 - navbar/NavbarComponente";
import { Footer_Componente } from "./Componentes/04- footer/FooterComponente";
import { About_Componente } from "./Componentes/03 - about/AboutComponente";
import { ItemListContainer } from "./Componentes/02 - productosLISTADO/ItemListContainer";

function App() {
  return (
    <>
      <section>
        <Navbar_Componente />
        <ItemListContainer greeting="Bienvenido al mejor lugar para ser rapido en Iracing"/>
        <About_Componente />
        <Footer_Componente />
        
      </section>
    </>
  );
}

export default App;

/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    */
