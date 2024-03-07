import { useState } from "react";
import React from "react";

export default function Options({ setChooseTeam }) { 

    function handleFilter(e) { 
        setChooseTeam(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                placeholder="Search Teams"
                onChange={handleFilter}
                
            />
            </form>
        </div>
    );
}
