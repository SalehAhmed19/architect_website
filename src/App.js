import "./App.css";
import DrawerAppBar from "./Shared/DrawerAppBar";
import Home from "./Pages/Home";
import Footer from "./Shared/Footer";
import ScrollToTop from "react-scroll-to-top";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Home />
      <Footer />
      <ScrollToTop
        color="#02411C"
        style={{
          boxShadow: "none",
          backgroundColor: "#D0011C",
          borderRadius: "50%",
          right: 50,
          zIndex: 20,
        }}
        component={
          <MdOutlineKeyboardDoubleArrowUp
            style={{ fontSize: "20px", margin: "0 auto", color: "#fff" }}
          />
        }
        smooth
        top={500}
      />
    </div>
  );
}

export default App;
