import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <header>
        <Header />
      </header>
      <div
        className="flex flex-1 justify-center items-center relative bg-cover bg-center"
        style={{ backgroundImage: "url(/images/foodBackground.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="flex flex-col gap-5 z-10">
          <Outlet />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
