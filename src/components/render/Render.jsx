import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { MDBContainer } from "mdb-react-ui-kit";
import defaulr from "./images/default.jpeg";
import styles from "./style.module.css";
import { allContext } from "../../Contexts";
import { NavLink } from "react-router-dom";
const Render = () => {
  const { users } = useContext(allContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(users.length);
  }, [users]);
  return (
    <div className={`flex flex-wrap ${styles.main}`}>
      <h1 className="ml-60 pb-5 mt-14">All Users({count})</h1>
      <div className={`flex flex-col ${styles.users} mb-3 `}>
        {users.map((item) => (
          <MDBContainer
            key={item.id}
            className={`my-1 d-flex justify-content-center border-2 border-b border-white relative ${styles.card}`}>
            <img
              src={item.image}
              className={`rounded-circle w-12 h-12 ${styles.img}`}
              alt="Avatar"
              onError={(e) => {
                e.target.src = defaulr;
              }}
            />
            <p className="mt-2.5 ml-1.5">{item.username}</p>
            <NavLink to={`/user/${item.id}`}>
              <button className={styles.button}>Detail</button>
            </NavLink>
          </MDBContainer>
        ))}
      </div>
    </div>
  );
};

export default Render;
