import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {

    let [listOfPokemon, setListOfPokemon] = useState([])

    let [clicked, setClicked] = useState(false)

    let [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")

            .then(response => {
                console.log("response after formatting it to json-->", response)
                setListOfPokemon(response.data.results)
            })

            .catch(err => {
                console.log("errorrr!!!-->", err)
            })

        console.log("this console.log is after the fetch promise, but will it run before the fetch get a response back? lets seee!!")
    }, [clicked])


    return (
        <>
            <h3>CAN YOU CATCH THEM ALL????</h3>
            <p><button onClick={() => setClicked(!clicked)}>Fetch Pokemon</button></p>

            <p>Find your favorite Pokemon: <input onChange={(e) => setSearchTerm(e.target.value)} type="text" name="" id="" placeholder='Search...' /></p>

            {
                listOfPokemon.filter((pokeObj, i) => {
                    return pokeObj.name.toLowerCase().includes(searchTerm.toLowerCase())
                }).map((pokeObj, i) => {
                    return (
                        <div key={i} style={{ border: "1px solid black" }}>
                            <h3>{pokeObj.name}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}


export default Pokemon;