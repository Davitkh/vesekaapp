import { useState } from "react";
import { useDebounce } from "../../../hooks/debounce";
import { useSearchQuery } from "../../../store/fakeapi-jph/fakeapi-jph";
import { Loader } from "../../../ui-kit/loader/loader";
import cls from "classnames";
import styles from "./users.module.css";

export const Users = () => {
  const { isLoading, data } = useSearchQuery("");
  console.log("data", data);
  return (
    <div className={cls(styles.users_)}>
      <h1 className={cls(styles.users_header)}>All users</h1>
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((user) => (
          <div key={JSON.stringify(user)} className={cls(styles.user_items)}>
            <h3>{user.name}</h3>
            <div>{user.email}</div>
            <div>{user.phone}</div>
            <div>{user.website}</div>
          </div>
        ))
      )}
    </div>
  );
};
