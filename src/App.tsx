import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import NavBar from "./components/layout/NavBar/Navbar";
import Footer from "./components/layout/Footer/Footer";
const App = () => {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;