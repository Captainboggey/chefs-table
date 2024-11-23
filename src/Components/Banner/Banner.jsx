

const Banner = () => {
    return (
        <div className='bg-banner-img mx-auto flex items-center justify-center md:min-h-svh mb-32 '>

            <div className="space-y-4">
            <h1 className='text-6xl text-white text-center'>Discover an exceptional cooking <br /> 
             class tailored for you!</h1>
             <p className="text-white text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
             <div className="flex items-center justify-center gap-5 mt-10">
                <button className="text-black py-4 px-8 rounded-2xl font-extrabold bg-[#0BE58A]">Explore Now</button>
                <button className="text-white py-4 px-8 rounded-2xl font-extrabold bg-transparent border-2">Our Feedback</button>
             </div>
             </div>
        
        
            
            
        </div>
    );
};

export default Banner;