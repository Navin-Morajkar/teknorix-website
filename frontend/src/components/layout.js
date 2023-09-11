import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <div class="flex">
        <div class="w-1/5"></div>
        <div class="w-4/5">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
