import { NavbarIcon } from "../../icons/Logo/NavbarIcon";
import styles from "./NavBar.module.css";
import clx from "classnames";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className={clx(styles.navbar, "navbar_area")}>
      {/*TODO: read css-flex csstrics*/}
      <div className={clx(styles.navbar_logo)}>
        <NavbarIcon />
      </div>
      <ul className={clx(styles.navbar_links)}>
        <li>
          <NavLink exact to="/">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/maps">Карты</NavLink>
        </li>
        <li>
          <NavLink to="/auth">Войти</NavLink>
        </li>
      </ul>
    </div>
  );
}
