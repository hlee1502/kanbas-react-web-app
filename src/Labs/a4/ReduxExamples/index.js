import React from "react";
import HelloReducer from "./HelloRedux/index";
import CounterReducer from "./CounterRedux/index";
import AddReducer from "./AddRedux/index";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloReducer/>
      <CounterReducer/>
      <AddReducer/>
    </div>
  );
};

export default ReduxExamples;