import { Content } from "./components/partials/content/content";
import { Navbar } from "./components/partials/navbar/navbar";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
