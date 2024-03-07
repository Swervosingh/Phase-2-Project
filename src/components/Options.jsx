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

              <div className="buttonContainer">
              <button value="Lakers" onClick={handleFilter}>Lakers</button>
              <button value="TimberWolves" onClick={handleFilter}>TimberWolves</button>
              <button value="OKC Thunder" onClick={handleFilter}>OKC Thunder</button>
              <button value="Nuggets" onClick={handleFilter}>Nuggets</button>
              <button value="Clippers" onClick={handleFilter}>Clippers</button>
              
                
            </div>
            </div>
        );
}



    
