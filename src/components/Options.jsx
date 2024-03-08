import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Options({ setChooseTeam }) {
    const navigate = useNavigate();

    function handleFilter(e) {
        setChooseTeam(e.target.value);
        navigate(`/quiz/${e.target.value}`);
    }

    return (
        <div className="SearchBar">
            <div className="buttonContainer">
                <button className="teamButton" value="Lakers" onClick={handleFilter}>
                    Lakers
                </button>
                <button className="teamButton" value="TimberWolves" onClick={handleFilter}>
                    TimberWolves
                </button>
                <button className="teamButton" value="OKC Thunder" onClick={handleFilter}>
                    OKC Thunder
                </button>
                <button className="teamButton" value="Nuggets" onClick={handleFilter}>
                    Nuggets
                </button>
                <button className="teamButton" value="Clippers" onClick={handleFilter}>
                    Clippers
                </button>
            </div>
            <input
                type="text"
                placeholder="Search Teams"
                onChange={handleFilter}
            />
        </div>
    );
}
