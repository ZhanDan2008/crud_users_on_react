import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { allContext } from "../../Contexts";
const Modalka = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(allContext);
  const [oneUser, setOneUser] = useState({
    username: "",
    gmail: "",
    age: 0,
    image: "",
    password: "",
    description: "",
    region: "chui",
  });
  async function handle(e) {
    const { name, value } = e.target;
    setOneUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
  return (
    <div className={styles.div}>
      <form>
        <label className={styles.label} for="fname">
          Никнейм
        </label>
        <input
          onChange={handle}
          type="text"
          id="name"
          name="username"
          placeholder="Username.."
        />

        <label className={styles.label} for="lname">
          Электоронная почта
        </label>
        <input
          onChange={handle}
          type="text"
          id="lname"
          name="gmail"
          placeholder="...@gmail.com"
        />

        <label className={styles.label} for="fname">
          Возраст
        </label>
        <input
          onChange={handle}
          type="text"
          id="fname"
          name="age"
          placeholder="Age.."
        />
        <label className={styles.label} for="lname">
          Расскажите коротко о себе
        </label>
        <input
          onChange={handle}
          type="text"
          id="lname"
          name="description"
          placeholder="Я люблю..."
        />
        <label className={styles.label} for="fname">
          Аватар
        </label>
        <input
          onChange={handle}
          type="text"
          id="fname"
          name="image"
          placeholder="Image url.."
        />

        <label className={styles.label} for="fname">
          Пароль
        </label>
        <input
          onChange={handle}
          type="text"
          id="name"
          name="password"
          placeholder="Password.."
        />

        <label className={styles.label} for="region">
          Область
        </label>
        <select
          onChange={handle}
          className={styles.select}
          id="region"
          name="region">
          <option value="chui">Чуйская область</option>
          <option value="batken">Баткенская область</option>
          <option value="djalal-abad">Джалал-Абадская область</option>
          <option value="narin">Нарынская область</option>
          <option value="osh">Ошская область</option>
          <option value="talas">Таласская область</option>
          <option value="issik-kol">Ыссык-Кольская область</option>
        </select>

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(oneUser);
            if (Object.values(oneUser).some((value) => value === "")) {
              alert("Есть пустые поля");
              return;
            }
            registerUser(oneUser);
            navigate("/");
          }}
          type="submit"
          value="Submit"
          className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Modalka;
