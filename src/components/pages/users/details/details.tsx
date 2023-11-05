import { useSearchParams } from 'react-router-dom';
// import { useSearchQuery } from '../../../../store/fakeapi-jph/fakeapi-jph';
import { Loader } from '../../../../ui-kit/loader/loader';
import styles from './details.module.css';

export const Details = () => {
  const [searchParams] = useSearchParams();
  const searchBy = searchParams.get('name');
  // const { data, isLoading } = useSearchQuery(searchBy);

  return (
    <div>Test</div>
    // <>
    //   {isLoading ? (
    //     <Loader />
    //   ) : (
    //     <div className={styles.details_}>
    //       {data?.map((user) => (
    //         <div className={styles.details_info} key={JSON.stringify(user)}>
    //           <div className={styles.details_info_common}>
    //             <div className={styles.details_info_photo}>
    //               <UserIcon />
    //             </div>
    //             <div>
    //               <div>Name: {user.username}</div>
    //               <div>Phone: {user.phone}</div>
    //               <div>Email: {user.email}</div>
    //               <div>Website: {user.website}</div>
    //             </div>
    //           </div>
    //           <div className={styles.details_info_address}>
    //             <h3>Address</h3>
    //             {/* <div>geo: {user.address.geo} </div>  */}
    //             <div> City: {user.address.city} </div>
    //             <div> Street: {user.address.street} </div>
    //             <div> Suite: {user.address.suite} </div>
    //             <div> Zip-Code: {user.address.zipcode} </div>
    //           </div>
    //           <div className={styles.details_info_address}>
    //             <h3>Company</h3>
    //             {/* <div>geo: {user.address.geo} </div>  */}
    //             <div> Name: {user.company.name} </div>
    //             <div> Street: {user.company.catchPhrase} </div>
    //             <div> Suite: {user.company.bs} </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </>
  );
};
