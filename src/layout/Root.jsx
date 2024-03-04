import Navbar from "../Shared/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  const location = useLocation();
  const noShoulder =
    location.pathname.includes("login") ||
    location.pathname.includes("register") ||
    location.pathname.includes("user-subscription");

  return (
    <div>
      {noShoulder || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noShoulder || <Footer></Footer>}
    </div>
  );
};

export default Root;
