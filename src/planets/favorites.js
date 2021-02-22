import React, { useState } from 'react'
import { ListGroupItemText } from 'reactstrap';
import { userContext } from './allPlanets'

const Favorites = ({planets}) => {

    let favItem = []
   const favorite = planets.map(item => {
       if(item.isFavourite === true){
           favItem.push(item)
       }
   })
    
return(
    <div className="mb-4 mt-4 ml-3">
        
            {favItem.map(fav => 
                <div className="mb-4 ml-4"> 
                    <h5 className="text-secondary">{fav.name}</h5>
                </div>
            )}
    </div>
    
)
  
} 

export default Favorites
