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
                <button className="teamButton" value="Lakers" onClick={handleFilter} style={{ backgroundColor: "#01796F" }}>
                    Lakers
                </button>
                <button className="teamButton" value="TimberWolves" onClick={handleFilter} style={{ backgroundColor: "#01796F" }}>
                    TimberWolves
                </button>
                <button className="teamButton" value="OKC Thunder" onClick={handleFilter} style={{ backgroundColor: "#01796F" }}>
                    OKC Thunder
                </button>
                <button className="teamButton" value="Nuggets" onClick={handleFilter} style={{ backgroundColor: "#01796F" }}>
                    Nuggets
                </button>
                <button className="teamButton" value="Clippers" onClick={handleFilter} style={{ backgroundColor: "#01796F" }}>
                    Clippers
                </button>
            </div>
            <input
                type="text"
                placeholder="Search Teams"
                onChange={handleFilter}
                style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "10px" }}
            />
        </div>
    );
}
