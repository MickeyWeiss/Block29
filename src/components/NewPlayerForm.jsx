import { useState } from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const cohortName = "2404-ftb-mt-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const NewPlayerForm = () => {
    const addNewPlayer = async (playerObj) => {
        try {
          const response = await fetch(API_URL + "/players",{
            method: "POST",
            headers: {
              'Content-Type': 'application/JSON',
            },
            body:JSON.stringify(playerObj)
      
          })
          const result = await response.json()
          console.log(result)
        } catch (err) {
          console.error("Oops, something went wrong with adding that player!", err);
        }
      };
    return (

        <div>
            <h2>Add New Puppy Player</h2>
            <form onSubmit = {addNewPlayer}>
                <label>Name: </label>
                <input type = 'text'></input>
                <label>Breed: </label>
                <input type= 'text'></input>
                <button type='submit'>Submit</button>
            </form>
        </div>


    )
}

export default NewPlayerForm