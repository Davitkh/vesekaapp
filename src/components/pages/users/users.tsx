import { useSearchQuery } from "../../../store/fakeapi-jph/fakeapi-jph";
import { Loader } from "../../../ui-kit/loader/loader";
import cls from "classnames";
import styles from "./users.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export const Users = () => {
  const { isLoading, data } = useSearchQuery("");
  const navigate = useNavigate();

  return (
    <div className={cls(styles.users_)}>
      <h1 className={cls(styles.users_header)}>All users</h1>
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((user) => (
          <div
            key={JSON.stringify(user)}
            className={cls(styles.user_items)}
            onClick={() => navigate(`/users/details?name=${user.name}`)}
          >
            <h3>{user.name}</h3>
            <div>{user.email}</div>
          </div>
        ))
      )}
    </div>
  );
};
