import "./App.css";
import DrawerAppBar from "./Shared/DrawerAppBar";
import Home from "./Pages/Home";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
