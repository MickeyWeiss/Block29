import { useState } from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const cohortName = "2404-ftb-mt-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const AllPlayers = () => {
    const [players, setPlayers] = useState([])
    const [searchParam, setSearchParam] = useState('')

    useEffect(()=> {
        const fetchAllPlayers = async () => {
            try {
                const response = await fetch(API_URL + "/players");
                const result = await response.json();
                console.log(result)
                setPlayers(result.data.players)
            } catch (err) {
                console.error(err)
                
            }
           
        }
        fetchAllPlayers()
    }, [])
console.log(players)

const searchPlayers = searchParam ? players.filter((player) => 
player.name.toLowerCase().includes(searchParam.toLowerCase())
) : players

return (

    <>
    <div>
        <label>
            Search for a Puppy Player:  
            <input type = 'text' onChange = {(event) => setSearchParam(event.target.value)} />
        </label>

        {searchPlayers.map((player) => {
            return <p key={player.id}>{player.name}</p>
        })};

    </div>
    </>

);

}

export default AllPlayers