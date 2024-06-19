import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer /> {}
    </>
  );
}

export default App;
