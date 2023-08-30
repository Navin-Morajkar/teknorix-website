import React from 'react'
import Header from "../../components/header/header";
import Style from "../../components/six_cards/six_cards.module.css"
import Six_cards from "../../components/six_cards/six_cards"; 
import ProfileImg from "../../components/profile_image/profile_image"
import EmployeeImg from "../../components/employee_image/employee_image"

export default function index() {
  return (
    <div>
     <Header entryId={7} /> 
      
            <div className={Style.parent}>
              {[7, 8, 9].map(entryId => (
                <Six_cards key={entryId} entryId={entryId} />
              ))}
            </div>

          <div className={Style.parent}>
          {[10, 11, 12].map(entryId => (
                <Six_cards key={entryId} entryId={entryId} />
              ))}
          </div> 
     <Header entryId={8} /> 
     <div className={Style.parent}>
       <ProfileImg entryId={1} />
       <ProfileImg entryId={2} />
    </div>
    <div >
         <EmployeeImg entryId={3 }  className={Style.child}/>
         {Array.from({ length: 61 }, (_, index) => index + 5).map(entryId => (
            <EmployeeImg key={entryId} entryId={entryId} />
          ))}
    </div>
    
  

     
    </div>
  )
}

