import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar_Componente } from "./Componentes/01 - navbar/NavbarComponente";
import { Footer_Componente } from "./Componentes/04- footer/FooterComponente";
import { About_Componente } from "./Componentes/03 - about/AboutComponente";
import { ItemListContainer } from "./Componentes/02 - productosLISTADO/ItemListContainer";
import { Cart } from "./Componentes/01b - cartwidget/Cart_test"
import { Detail_Producto1 } from "./Componentes/02c - ItemDetailContainer/DetailProducto1";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <section>
      <BrowserRouter>
        <Navbar_Componente />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido al mejor lugar para ser rapido en Iracing"/> }/>
          <Route path="/category/:time" element={<ItemListContainer /> }/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/Producto-1-Detail/:week" element={<Detail_Producto1 />}/>
          <Route path="*" element={<h2>404 Not found</h2>} />
        </Routes>
        <About_Componente />
        <Footer_Componente />
      </BrowserRouter>
      </section>

       





      
    </>
  );
}

export default App;


