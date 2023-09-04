import { User } from '../../../../types/fakeapi.td';
import { ITable } from '../../../../types/table.td';

export const gettabledata = (data: any): ITable[] => {
  if (!Array.isArray(data)) {
    return [];
  }
  const userDataHeader = {
    row: [
      {
        name: 'Name',
        email: 'Email',
        address: 'Address',
        phone: 'Phone',
        website: 'Website',
        company: 'Company',
      },
    ],
  };
  const userData = data.map((item: User) => ({
    row: [
      {
        name: item.name,
        email: item.email,
        address: `${item.address.city} ${item.address.street}`,
        phone: item.phone,
        website: item.website,
        company: item.company.name,
      },
    ],
  }));
  userData.unshift(userDataHeader);
  return userData;
};
