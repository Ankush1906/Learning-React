import { useState } from "react";
export default function Counter(){
  
  let [count , setCount] = useState(0);
   console.log("component is rendered!");
   

   let incCount = ()=>{
         setCount(count+1);
          console.log(`inside incCount , count = ${count}`);
   };

    return(
        <div>
            <h3>count = {count} </h3>
            <button onClick={incCount}>Increase count</button>
        </div>
    );
}