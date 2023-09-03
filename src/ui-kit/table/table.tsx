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
  return (
    <div>
      <table className={cls(styles.table_)}>
        {data.map((item) => {
          if (item.rowType === 'header') {
            return (
              <thead key={uuidv4()}>
                <tr>
                  {item.row.map((thead) => (
                    <Fragment key={uuidv4()}>
                      <th>{thead.title}</th>
                      <th>{thead.title}</th>
                      <th>{thead.title}</th>
                      <th>{thead.title}</th>
                    </Fragment>
                  ))}
                </tr>
              </thead>
            );
          }
          return (
            <tbody key={uuidv4()}>
              <tr>
                {item.row.map((tbody) => (
                  <Fragment key={uuidv4()}>
                    <td>{tbody.title}</td>
                    <td>{tbody.title}</td>
                    <td>{tbody.title}</td>
                    <td>{tbody.title}</td>
                  </Fragment>
                ))}
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
