



const Current = ({cook}) => {
    
    
    
    return (
        <div>
            <table  className="table-auto text-center mx-auto ">
            <thead >
              <tr >
                <th className="p-3">Name </th>
                
                <th className="p-2">Time</th>
              
                <th className="p-2">Calories</th>
              
                
                
                
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td className="p-3" >{cook.recipe_name}  </td>
                
                <td className="p-2">{cook.preparing_time} Minutes</td>
               
                <td className="p-2">{cook.calories}</td>
                
                
              </tr>
            </tbody>
          </table>
          <hr />
            
            
            
            
        </div>
    );
};

export default Current;