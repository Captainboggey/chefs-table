import { useState } from "react";
import Current from "../Current/Current";



const Cook = ({ cook }) => {
    const [current,setCurrent]=useState([])
    
    const handleCurrentBtn =(cook)=>{
        const newCurrent =[...current,cook]
        setCurrent(newCurrent);
        
        
        
      }
    
  return (
    <div className="flex justify-center border-2 p-4 rounded-xl space-y-4 ">
      <div className="text-center">
        <h1 className="text-2xl ">Want to Cook: {cook.length}</h1>
        <hr />

        {cook.map((cook, idx) => (
          <table key={idx} className="table-auto  ">
            <thead >
              <tr >
                <th className="p-3">Name </th>
                
                <th className="p-2">Time</th>
              
                <th className="p-2">Calories</th>
              
                <th className="p-2">Ready?</th>
                
                
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td className="p-3" >{cook.recipe_name}  </td>
                
                <td className="p-2">{cook.preparing_time} Minutes</td>
               
                <td className="p-2">{cook.calories}</td>
            
                
                <td>
                  <button onClick={()=>handleCurrentBtn(cook)} className="bg-[#0BE58A] py-2 px-5 rounded-3xl">Preparing </button>
                </td>
              </tr>
            </tbody>
            
          </table>
        ))}
        <hr />
        <h1 className="text-2xl">Currently Cooking: {cook.length}</h1>
        <hr />
        {
            current.map((cook,i)=><Current  cook={cook} key={i}></Current>)
        }
      </div>
    </div>
  );
};

export default Cook;
