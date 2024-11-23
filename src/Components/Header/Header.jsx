import profileBtn from '../../assets/Frame.svg'

const Header = () => {
    return (
        
            <header className=' flex justify-between items-center p-4'>
                <div>
                    <h1 className='text-4xl font-bold'>Recipe Calories</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex gap-6 text-xl'>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
               <div className='flex items-center'>
                 <input className=" border-2 p-1 rounded-xl" type="text" placeholder="Search Here" />
                 <button><img  src={profileBtn} alt="" /></button>
               </div>

            </header>
            
        
    );
};

export default Header;