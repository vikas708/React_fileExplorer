import React, { useState } from "react";

const Stepper = ({ stepper }) => {


    const [currentstep, setcurrentstep] = useState(0)

    const cotinue =()=>{
        if(currentstep<=stepper.length-1)
       setcurrentstep(currentstep+1)
    }

    const backbutton =()=>{
       if(currentstep !==0) setcurrentstep(currentstep-1)
      
    }
    // console.log(stepper.label)
    return (
        <div className="stepper">
            <div >
                {stepper?.map(({ lable, content }, index) => {
                    return (
                        <div key={lable} className="stepper-container">
                            <div className={`step-number ${ index <= currentstep ? "active" : ""}`}>
                                {index + 1}
                                { index <stepper.length-1 &&   <div className={`step-line ${index<=currentstep?"active":""}`}></div>}
                            </div>
                         <div className="step-label">{lable}</div>
                        </div>
                    );
                })}
            </div>
            <div className="stepper-content">{ stepper[currentstep].content} </div>
            <div className="stepper-controls">
                <button onClick={backbutton}>Back</button>
                <button  onClick={cotinue}  disabled={currentstep === stepper.length - 1}>Continue</button>
            </div>
        </div>
    )
}

export default Stepper