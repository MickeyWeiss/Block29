import {useState} from 'react'
import {useEffect} from 'react'

const cohortName = "2404-ftb-mt-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const SinglePlayer = () => {
    const [player, setPlayer] = useState({})

    useEffect(() => {
        const fetchSinglePlayer = async () => {
            try {
                const response = await fetch(`${API_URL}/players/${playerId}`);
                const result = await response.json()
                console.log(result)
                setPlayer(result.data.player)
            }catch (err) {
                console.error(err)
            }
        }
        fetchSinglePlayer()
    }, [])

    
}

export default SinglePlayer