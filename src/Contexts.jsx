import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const allContext = createContext();
export { allContext };
const Contexts = ({ children }) => {
  const API = "http://localhost:8000/users";
  const [users, setUsers] = useState([]);
  const [oneUser, setOneUser] = useState(null);

  async function getUsers() {
    try {
      let res = await axios.get(API);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  async function updateUser(id, newUser) {
    await axios.patch(`${API}/${id}`, newUser);
    getUsers();
  }
  async function registerUser(newUser) {
    try {
      await axios.post(API, newUser);
      getUsers();
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
  function getOneUser(id) {
    return users.find((item) => item.id == id);
  }
  async function deleteUser(id) {
    await axios.delete(`${API}/${id}`);

    getUsers();
  }
  function giveWhatRegion(str) {
    let obj = {
      chui: "Чуйская",
      batken: "Баткенская",
      "djalal-abad": "Джалал-Абадская",
      narin: "Нарынкая",
      osh: "Ошская",
      talas: "Таласская",
      "issik-kol": "Ыссык-Кольская",
    };
    return obj[str];
  }
  return (
    <allContext.Provider
      value={{
        oneUser,
        users,
        getUsers,
        registerUser,
        updateUser,
        deleteUser,
        giveWhatRegion,
        getOneUser,
      }}>
      {children}
    </allContext.Provider>
  );
};

export default Contexts;
