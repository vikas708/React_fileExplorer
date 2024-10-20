import React, { useState } from "react";

const Fileexplorer = ({ formdata }) => {

    const [showfolder, isShowfolder] = useState(false)

    const handleclick =()=>{
        isShowfolder(!showfolder)
    }

    return (

        <div className="container">
            <h5>{formdata.type === "folder" ? (showfolder?"📂":"📁" ): "📄"}
                <span className="foldername"  onClick={handleclick}>{formdata.name}</span>
            </h5>
            {
               showfolder&& formdata?.children?.map((formdata, index) => {
                    return <Fileexplorer formdata={formdata} key={index} />
                })
            }
        </div>


    )
}

export default Fileexplorer
