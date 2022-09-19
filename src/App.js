import "./components/styles/app.scss";
import * as React from "react";
import Nav from "./components/nav/Nav";
import ItemContainerList from "./components/Registros/show/ItemListContainer/ItemListContainer";
import RegistroContext from "./context/RegistroContext";
import { Route, Routes } from "react-router";
import Create from "./components/Registros/create/Create";
import Edit from "./components/Registros/edit/editContainer/EditContainer";

function App() {
  return (
    <>
      <RegistroContext>
        <Nav />

        <Routes>
          <Route path="/" element={<ItemContainerList />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Edit />} />
        </Routes>
      </RegistroContext>
    </>
  );
}

export default App;
