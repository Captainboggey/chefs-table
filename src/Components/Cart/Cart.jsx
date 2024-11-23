import min from '../../assets/minutes.png'
import cal from '../../assets/cal.png' 

const Cart = ({cart,handleCookBtn}) => {
    const {recipe_name,recipe_id,recipe_image,short_description,ingredients,calories,preparing_time}=cart;
     
   
    return (
        <div className=" mx-auto p-4 text-center  border-2 border-gray-500 rounded-lg  ">
            
            <div className="flex justify-center ">
            <img  className="h-52 w-72 rounded-lg" src={recipe_image} alt="" />
            </div>
            <h1 className="font-extrabold text-xl">{recipe_name}</h1>
            <p>{short_description}</p>
            <hr />
            <br />
            <br />
            <h1 className="text-left">Ingredients: {ingredients.length}</h1>
            <br />
            <hr />
            <br />
            <ul className="text-left ">
                {
                      ingredients.map((ingredients,i)=> <li  key={i}>{ingredients}</li>)
                }
              
            </ul>
            <br />
            <hr />
            <br />
            <hr />
            <br />
            <div className=' flex gap-2'>
                <div className='flex gap-2'>
                <div >
                    <img src={min} alt="" />
                </div>
                <div>
                    <p>{preparing_time}</p>
                </div>
                </div>
                <div className='flex gap-2'>
                <div >
                    <img src={cal} alt="" />
                </div>
                <div>
                    <p>{calories}</p>
                </div>
                </div>

            </div>
            <br />
            <div className='text-left'>
                <button onClick={()=>handleCookBtn(cart)} className='text-xl  font-black bg-[#0BE58A] py-3 px-6 rounded-3xl'>Want to Cook</button>
            </div>

            
        </div>
    );
};

export default Cart;