import { Content } from './components/partials/content/content';
import { Navbar } from './components/partials/navbar/navbar';
// import { useActions } from './hooks/actions';
import { useAppSelector } from './hooks/redux';

const App = () => {
  // const { toggleAuthForm } = useActions();
  const { isLogin } = useAppSelector((state) => state.toggler);
  console.log(isLogin);
  // const testFoonction = (event: React.MouseEvent) => {
  //   event.preventDefault();
  //   toggleAuthForm(isLogin ? false : true);
  // };

  return (
    <div className="wrapper">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
