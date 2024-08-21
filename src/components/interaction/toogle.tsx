import React, { useState } from 'react'
import {Switch} from "@nextui-org/switch";

const Toogle = ({ onChange }: any) => {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
        onChange(!toggle);
    };
    console.log(toggle)

  return (
    <div className="flex">
        <div 
            onClick={handleClick} 
            className={`flex h-6 w-16 cursor-pointer rounded-full p-[1px] ${toggle ? "justify-end bg-sage" : "justify-start bg-black"}`}>
                <div className="h-5 w-5 relative rounded-full transition-all duration-700 bg-white" />
        </div>
        <label className={`absolute ml-1 text-xs pt-1 text-white font-bold ${toggle ? "block" : "hidden"}`}>
            ON
        </label>
        <label className={`absolute ml-1 pt-1 right-12 text-xs text-white font-bold ${toggle ? "hidden" : "block"}`}>
            OFF
        </label>
    </div>
  )
}

export default Toogle