import { useState } from "react";

function App(){
  let [counter,setcounter] = useState(0);
  function inc(){
    setcounter(counter+1);
  }
  function dec(){
    setcounter(counter-1);
  }
  
  return(
    <div>
      <p>Counter: {counter} </p>
      <button onClick={inc}> inc counter</button>
      <button onClick={dec}> dec counter</button>
    </div>
  );
}








export default App;