import { FC, Fragment } from 'react';
import { ITable } from '../../types/table.td';
import { v4 as uuidv4 } from 'uuid';
import cls from 'classnames';
import styles from './table.module.css';

interface ITableProps {
  data: ITable[];
}
export const Table: FC<ITableProps> = (props) => {
  const { data } = props;
  console.log('data', data);
  return (
    <div className={cls(styles.table_wrapper)}>
      <table className={cls(styles.table_)}>
        <thead key={uuidv4()} className={cls(styles.thead_)}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody className={cls(styles.tbody_)}>
          {data.map((item) => {
            return (
              <tr key={uuidv4()}>
                {item.row.map((tbody) => (
                  <Fragment key={uuidv4()}>
                    <td>{tbody.name}</td>
                    <td>{tbody.email}</td>
                    <td>{tbody.address}</td>
                    <td>{tbody.phone}</td>
                    <td>{tbody.company}</td>
                    <td>{tbody.website}</td>
                  </Fragment>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
