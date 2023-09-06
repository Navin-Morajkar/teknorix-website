import React from "react";
import Header from "../../components/Header/Header";
import Style from "../../components/SixCards/SixCards.module.css";
import SixCards from "../../components/SixCards/SixCards";
import ProfileImg from "../../components/ProfileImage/ProfileImage";
import EmployeeImg from "../../components/EmployeeImage/EmployeeImage";
import OurJob from "../../components/OurJobs/OurJobs"
import OurWork from "../../components/OurWork/OurWork"
import QuoteForm from "../../components/QuoteForm/QuoteForm"
import SideBar from "@/components/Sidebar/sidebar";
import Footer from "@/components/Footer/Footer";

export default function index() {
  return (
    <div>

      <SideBar />
      <Header entryId={7} />
      <div style={{ marginLeft: '20%', paddingLeft: '2%', height: '150vh' }}>
        <div className={Style.parent}>
          {[7, 8, 9].map((entryId) => (
            <SixCards key={entryId} entryId={entryId} />
          ))}
        </div>

        <div className={Style.parent}>
          {[10, 11, 12].map((entryId) => (
            <SixCards key={entryId} entryId={entryId} />
          ))}
        </div>
        <Header entryId={8} />
        <h2 className={Style.textcenter}>Our Team</h2>
        <div className={Style.parent}>
          <ProfileImg entryId={1} />
          <ProfileImg entryId={2} />
        </div>
        <div className={Style.child}>
          <EmployeeImg entryId={3} />
          {Array.from({ length: 61 }, (_, index) => index + 5).map((entryId) => (
            <EmployeeImg key={entryId} entryId={entryId} />
          ))}
        </div>
        <div className={Style.parent}>
          <OurWork />
          <OurJob entryId={4} />
          <OurJob entryId={5} />
        </div>
        
        <QuoteForm />
        <Footer/>
        
      </div>
    </div>

  );
}
