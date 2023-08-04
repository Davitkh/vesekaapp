import { Route, Routes } from "react-router-dom";
import styles from "./content.module.css";
import cls from "classnames";
import { Home } from "../../pages/home/home";
import { Maps } from "../../pages/maps/maps";
import { Auth } from "../../pages/auth/auth";

export const Content = () => {
  return (
    <div className={cls(styles.content_)}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};
