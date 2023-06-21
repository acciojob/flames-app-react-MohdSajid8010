import React, { useState } from "react";

import '../styles/App.css';

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]
const App = () => {
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    const [relation, setRelation] = useState("");

    function findRelation() {
        if (fname === "" || lname === "") {
           return setRelation("Please Enter valid input");
        }

        console.log(fname, lname);

        for (let ch of fname) {
            if (lname.includes(ch)) {

                lname = lname.replace(ch, "");
                fname = fname.replace(ch, "");
            }
        }
        setFname(fname)
        setLname(lname)
        setRelation(arr[(fname.length + lname.length) % 6])
        console.log("fname", fname, lname, relation)
    }

    function resetFun() {
        setFname("")
        setLname("")
        setRelation("")
    }
    return (
        <div id="main">
            {/* Do not remove the main div */}
            <input type='text' data-testid="input1" placeholder="Enter first name" name="name1"
                onChange={(e) => setFname(e.target.value)} />

            <input type='text' data-testid="input2" placeholder="Enter second name" name="name2"
                onChange={(e) => setLname(e.target.value)} />

            <button data-testid="calculate_relationship"
                onClick={findRelation}>calculate Relationship Future</button>

            <button data-testid="clear"
                onClick={resetFun}>Clear</button>
            {
                <h3 data-testid="answer">{relation}</h3>
            }

        </div>
    )
}


export default App;

