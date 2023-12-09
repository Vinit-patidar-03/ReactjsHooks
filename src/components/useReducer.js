import React, { useReducer } from "react";

const UseReducer = () => {

  const reducer = (state, action) => {
    if (action.type === 'INCR') {
      return state + 1;
    }
    else if (action.type === 'DECR') {
      return state - 1;
    }
    else {
      return state;
    }
  }

  const init = (value) => {
    if (value === 0) {
      return 10;
    }
    return 0;
  }

  const initialState = 0;
  const [number, dispatch] = useReducer(reducer, initialState, init);

  //useReducer returns an array of two elments first one is variable and second one is used to trigger reducer function. and it takes two arguments 1st reducer function second initial state.
  //init function in the last is a optional if we add optional function the initial state will be the value returned by the init function by parsing initalstate into the function.

  return (
    <>
      <div className=" w-100 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card w-75 h-25">
          <div className="card-header text-center">counter</div>
          <div className="card-body">
            <h5 className="card-title text-center">{number}</h5>
            <div className=" w-100 d-flex justify-content-around align-items-center my-5">
              <button className="btn btn-primary" onClick={() => {
                dispatch({
                  type: 'INCR'
                })
              }}>INCR</button>
              <button className="btn btn-primary" onClick={() => {
                dispatch({ type: 'DECR' })
              }}>DECR</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
