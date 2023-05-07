import clx from "classnames";
import styles from "./Content.module.css";
import { Route } from "react-router-dom";
import { Maps } from "../../pages/maps/maps";
import { Contacts } from "../../pages/contacts/contacts";
import { About } from "../../pages/about/about";
import { Signin } from "../../pages/login/signin";
import { Signup } from "../../pages/login/signup";
import { Home } from "../../pages/home/home";

export const Content = () => {
  return (
    <div className={clx(styles.content, "content_area")}>
      <Route exact path={"/"} component={Home} />
      <Route path={"/maps"} component={Maps} />
      <Route path={"/about"} component={About} />
      <Route path={"/contacts"} component={Contacts} />
      <Route path={"/signin"} component={Signin} />
      <Route path={"/signup"} component={Signup} />
    </div>
  );
};
