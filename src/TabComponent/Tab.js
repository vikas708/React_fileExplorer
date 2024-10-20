import React, { useState } from "react";
 const Tab =({tab})=>{

const [currentTab, setCurrentTab]=useState(0)


    const handlclick =(i)=>{
      setCurrentTab(i)
    }
    console.log(tab)
    return(
       <div className="tab">
          <div className="tab_container">
             {
                tab.map((item,index)=>{
                    return (
                        <button key={index}  className={`${currentTab ===index?"bactive":""}`}  onClick={()=>handlclick(index)}>{item.lable}</button>
                    )
                })
             }
          </div>
          <div className="content_container">
            {tab[currentTab].content}
          </div>
       </div>
    )
 }

 export default Tab