import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto my-12 px-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
