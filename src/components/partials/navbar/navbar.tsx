import cls from "classnames";
import styles from "./navbar.module.css";
import "./navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  console.log(styles);
  return (
    <nav className={cls(styles.navbar_)}>
      <div className={cls(styles.navbar_logo)}>
        <span>V</span>eselka
      </div>
      <div className={cls(styles.navbar_items, "top_navbar_items")}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/maps">Maps</NavLink>
        <NavLink to="/auth">Auth</NavLink>
      </div>
    </nav>
  );
};
