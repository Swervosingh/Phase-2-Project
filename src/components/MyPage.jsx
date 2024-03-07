import React from "react";
import Options from "./Options";
import QuestionPage from "./QuestionPage";
import { useState, useEffect } from "react";
// import NavBar from "./NavBar";



export default function MyPage() { 

    const [trivia, setTrivia] = useState([])
    const [chooseTeam, setChooseTeam] = useState("")
    

    useEffect(() => { 
        fetch('http://localhost:4000/trivia')
        .then(res => res.json())
        .then(triviaData => setTrivia(triviaData))
    },[])


    const filteredArray = trivia.filter(trivia => {return trivia.team.toLowerCase().includes(chooseTeam.toLowerCase())})
    
    return ( 
        <div>

            <QuestionPage filteredArray={filteredArray}/>   
            
            <Options setChooseTeam={setChooseTeam} />

        </div>
    )
}

// export default function MyPage(){
    
//     const[trivia, setTrivia]= useState([])
//     const[chooseTerm, setChooseTerm]= useState([""]);
//     const[chooseTeam, setChooseTeam]= useState([""]);
    
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchTeam, setSearchTeam] = useState("");

    
//     useEffect(() => {
//         fetch('http://localhost:4000/trivia')
//         .then(response => response.json())
//         .then(triviaData => {
//             setTrivia(triviaData);
//             // console.log(triviaData)
//         })
        
//     }, [])

//     console.log(trivia)
    
//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const handleSelectTeam = (team) => {
//         setChooseTeam(team);
//     }
    
    
//     return(
//         <div className="search-container" >
            
//             <input
//                 type="text"
//                 placeholder="Search NBA team..."
//                 value={searchTerm}
//                 onChange={handleSearch}
//             />

//             <Options searchTerm={searchTerm} handleSearch={handleSearch} handleSelectTeam={handleSelectTeam}/>
//             {chooseTeam && (
//                 <button onClick={() => console.log("Start quiz for team:", chooseTeam)}>
//                 Start Quiz
//             </button>
//         )}

//         {chooseTeam && <QuestionPage filterTrivia={trivia.filter(trivia => trivia.team === chooseTeam)} />} 
            
//             <NavBar className= "NBATrivia"/>

//         </div>
//     )

// }


