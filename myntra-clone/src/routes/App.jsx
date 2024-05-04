import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/FetchItems";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
      <FetchItems />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;