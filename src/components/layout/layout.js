import React from "react";
import Work from "./Work";
import Hire from "./Hire";
import { useContext } from "react";
import ViewContext from "../../context/view/viewContext";
import Navbar from "../navbar/Navbar";
import BottomNav from "../bottomnav/BottomNav";
import Connect from "../connection/Connect";
import UserContext from "../../context/user/userContext";
export const Layout = () => {
  const view = useContext(ViewContext);
  const user = useContext(UserContext);

  if (!user.iswalletAvailable || !user.isConnected) {
    return <Connect />;
  }

  return (
    <>
      <Navbar />
      <BottomNav />
      {view.view === "work" && <Work />}
      {view.view === "hire" && <Hire />}
    </>
  );
};

export default Layout;
