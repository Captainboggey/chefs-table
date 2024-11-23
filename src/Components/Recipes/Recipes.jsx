import Carts from "../Carts/Carts";


const Recipes = ({handleCookBtn}) => {
    return (
        <div className="text-center space-y-4">
           

            
            <h1 className="text-4xl">Our Recipes</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget <br /> urna volutpat curabitur elementum mauris aenean neque. </p>
            
            <Carts handleCookBtn={handleCookBtn}></Carts>
           
            
        </div>
    );
};

export default Recipes;