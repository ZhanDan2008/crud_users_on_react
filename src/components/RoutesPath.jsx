import React from "react";
import { Route, Routes } from "react-router-dom";
import Modalka from "./modalka/Modalka";
import Render from "./render/Render";
import Detail from "./users_page/Detail";
import Update from "./update/Update";

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Render />}></Route>
        <Route path="/register" element={<Modalka />}></Route>
        <Route path="/user/:id" element={<Detail />}></Route>
        <Route path="/user/update/:id" element={<Update />}></Route>
      </Routes>
    </div>
  );
};

export default RoutesPath;
