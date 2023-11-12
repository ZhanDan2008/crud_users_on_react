import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
function Navbar_const() {
  return (
    <div className={styles.main}>
      <NavLink to="/" className={styles.a}>
        Home
      </NavLink>
      <NavLink to="/register" className={styles.a}>
        Register
      </NavLink>
    </div>
  );
}

export default Navbar_const;
