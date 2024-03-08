import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Options({ setChooseTeam }) { 

    const navigate =  useNavigate()

    
    function handleFilter(e) { 
        setChooseTeam(e.target.value);
        navigate(`/quiz/${e.target.value}`)
        
    }
    
        
    return ( 
            <div className="SearchBar">
                
                

              <div className="buttonContainer">
              <button value="Lakers" onClick={handleFilter}>Lakers</button>
              <button value="TimberWolves" onClick={handleFilter}>TimberWolves</button>
              <button value="OKC Thunder" onClick={handleFilter}>OKC Thunder</button>
              <button value="Nuggets" onClick={handleFilter}>Nuggets</button>
              <button value="Clippers" onClick={handleFilter}>Clippers</button>
            </div>
            <input 
                  
                  type="text"
                  placeholder="Search Teams"
                  onChange={handleFilter}
                  
                  
              />
            </div>
        );
}
