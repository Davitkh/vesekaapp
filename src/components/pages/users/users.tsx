// import { useSearchQuery } from '../../../store/fakeapi-jph/fakeapi-jph';
import { Loader } from '../../../ui-kit/loader/loader';
import cls from 'classnames';
import styles from './users.module.css';
// import { useNavigate } from 'react-router-dom';

export const Users = () => {
  // const { isLoading, data } = useSearchQuery('');
  const data = [];
  // const navigate = useNavigate();
  // const tdata = gettabledata(data);
  // if (isLoading) return <Loader />;

  return (
    <div className={cls(styles.users_)}>
      <div className={cls(styles.users_body)}>
        <h3 className={cls(styles.users_header)}>All users</h3>
        {/* {<Table data={tdata} />} */}
      </div>
    </div>
  );
};
