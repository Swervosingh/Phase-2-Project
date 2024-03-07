import { useState } from "react";
import React from "react";

export default function Options({ setChooseTeam }) { 

    

    
    function handleFilter(e) { 
        setChooseTeam(e.target.value);
        
    }
    
        
    return ( 
            <div className="SearchBar">
                
                <input 
                    
                    type="text"
                    placeholder="Search Teams"
                    onChange={handleFilter}
                    
                />
                
            </div>
        );
}



    
