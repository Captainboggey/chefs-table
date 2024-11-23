import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";


const Carts = ({handleCookBtn}) => {
    const [carts,SetCarts]=useState([]);
    useEffect(()=>{
        fetch('recipe.json')
        .then(res=>res.json())
        .then(data=>SetCarts(data))
    },[])
    return (
        <div>
            
            <div className="grid md:grid-cols-2 justify-center items-center">
            {
                carts.map(cart=><Cart handleCookBtn={handleCookBtn} key={cart.id}  cart={cart}></Cart>)

            }
            </div>
            
        </div>
    );
};

export default Carts;