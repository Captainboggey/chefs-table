

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'


function App() {
  const [cook,setCook] =useState([]);
  
  
  const handleCookBtn = (cart)=>{
    const newCook =[...cook,cart]
    setCook(newCook)
  }
  

  
  

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <div className='md:flex  justify-evenly'>
    <Recipes handleCookBtn={handleCookBtn}></Recipes>
    <div>
    <Cook  key={cook.recipe_id} cook={cook}></Cook>
   
    </div>
    </div>
     
      
    </>
  )
}

export default App
