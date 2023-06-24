import React, { useState } from "react";

const UseState = () => {

    const [number,setNumber] = useState(0);
    //useState returns a array of to element one is a varible and other one is function to set that variable.
  return (
    <>
    <div className=" w-100 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
      <div className="card w-75 h-25">
        <div className="card-header text-center">counter</div>
        <div className="card-body">
          <h5 className="card-title text-center">{number}</h5>
          <div className=" w-100 d-flex justify-content-around align-items-center my-5">
          <button className="btn btn-primary" onClick={()=>
          {
            setNumber(number+1);
          }}>INCR</button>
          <button className="btn btn-primary" onClick={()=>
          {
           number > 0 ? setNumber(number-1):setNumber(0)
          }}>DECR</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UseState;
