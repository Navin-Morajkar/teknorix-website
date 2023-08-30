import React from "react";
import Header from "../../components/header/header";
import Style from "../../components/six_cards/six_cards.module.css";
import Six_cards from "../../components/six_cards/six_cards";
import ProfileImg from "../../components/profile_image/profile_image";
import EmployeeImg from "../../components/employee_image/employee_image";
import Our_job from "../../components/our_jobs/our_jobs" 
import Our_work from"../../components/our_work/our_work"
import Quote_form from "../../components/quote_form/quote_form" 
import Sidebar from "@/components/sidebar/sidebar";

export default function index() {
  return (
    <div>
      <Sidebar />
      
      <Header entryId={7} />
      <div style={{ marginLeft: '20%', paddingLeft: '2%', height: '150vh' }}>
      <div className={Style.parent}>
        {[7, 8, 9].map((entryId) => (
          <Six_cards key={entryId} entryId={entryId} />
        ))}
      </div>

      <div className={Style.parent}>
        {[10, 11, 12].map((entryId) => (
          <Six_cards key={entryId} entryId={entryId} />
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
          <Our_work/>
          <Our_job entryId={4} />
          <Our_job entryId={5} />
          </div>
          <Quote_form/>
        </div>
      
    </div>
    
  );
}
