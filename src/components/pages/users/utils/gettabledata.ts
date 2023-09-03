import { User } from '../../../../types/fakeapi.td';
import { ITable } from '../../../../types/table.td';

export const gettabledata = (data: any): ITable[] => {
  if (!Array.isArray(data)) {
    return [];
  }
  const userDataHeader = {
    row: [{ title: 'Name' }],
    rowType: 'header',
  };
  const userData = data.map((item: User) => ({
    row: [{ title: item.username }],
    rowType: 'body',
  }));
  userData.unshift(userDataHeader);
  return userData;
};
