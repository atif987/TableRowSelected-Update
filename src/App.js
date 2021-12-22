import CaseItemHeader from "./components/CaseItemHeader";
import Counter from "./components/Counter";
import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const GlobalInfo=createContext();
function App() {
  const [count,setcount]= useState(0);
  let sum=0;
  function getdata(data) {
    sum = sum + data;
    setcount(count+sum);
  }

  return (
    <GlobalInfo.Provider value={{getdata:getdata}}>
    <div>
        <Counter counter={count}/>
        <CaseItemHeader trunkname={"Truck 1"}  />
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
