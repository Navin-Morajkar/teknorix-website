import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Image from "next/image";
import { useState, React } from "react";
import { MyContext } from "./MyContext";
import HeaderImage from "./HeaderImage/HeaderImage";
import { SidebarProvider } from "./SidebarContext";

export default function Layout({ children }) {
  const [headerImageLink, setHeaderImageLink] = useState();

  return (
    <SidebarProvider>
      <Sidebar />
      <div className="w-full">
        <MyContext.Provider value={{ headerImageLink, setHeaderImageLink }}>
          <HeaderImage />
        </MyContext.Provider>
      </div>
      <div className="flex">
        <div className="w-1/5"></div>
        <div className="w-4/5">
          <MyContext.Provider value={{ headerImageLink, setHeaderImageLink }}>
            <main>{children}</main>
          </MyContext.Provider>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
}
