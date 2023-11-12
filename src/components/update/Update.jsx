import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { allContext } from "../../Contexts";
const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateUser, getOneUser } = useContext(allContext);
  const getUser = getOneUser(id);
  const [oneUser, setOneUser] = useState(getUser);
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
          value={oneUser.username}
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
          value={oneUser.gmail}
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
          value={oneUser.age}
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
          value={oneUser.description}
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
          value={oneUser.image}
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
          value={oneUser.password}
          placeholder="Password.."
        />

        <label className={styles.label} for="region">
          Область
        </label>
        <select
          onChange={handle}
          className={styles.select}
          id="region"
          value={oneUser.region}
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
            updateUser(id, oneUser);
            navigate("/");
          }}
          type="submit"
          value="Submit"
          className={styles.button}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
