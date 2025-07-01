import React, { useState } from "react";
import Button from "./components/Button";
function App(){
    let [color,setColor] = useState("olive");
    return(
        <div className="w-full h-screen flex justify-center"
            style={{ backgroundColor: color }}
        >
            <div 
                className="fixed bottom-12 flex justify-center px-4 py-4 h-12"
                style={{ width: "700px" }} 
            >
                <div className="flex gap-3 justify-center">
                    <Button color="red" text="red" textColor="white"/>
                </div>
            </div>
        </div>
    );
}
export default App;