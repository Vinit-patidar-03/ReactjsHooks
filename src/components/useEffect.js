import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [number,setNumber] = useState(0);

    useEffect(()=>
    {
        document.title = `chats(${number})`
    })
//useEffect runs once the page rendered
//if we will not give it the second argument it runs when a state will update in the document.
//if we give it second argument as empty array [] then it will run only once the page rendered.

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
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default UseEffect;