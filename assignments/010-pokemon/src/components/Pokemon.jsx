import React, {useState} from 'react';
import axios from 'axios';

const Pokemon = ()=>{

    let [listOfPokemon, setListOfPokemon] = useState([])

    const getPokemon = ()=>{
        console.log("you clicked on that button!")

        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        
        .then(response=>{
            console.log("response after formatting it to json-->", response)
            setListOfPokemon(response.results)
        })

        .catch(err =>{
            console.log("errorrr!!!-->", err)
        })

        console.log("this console.log is after the fetch promise, but will it run before the fetch get a response back? lets seee!!")
    }

    


    return (
        <>
            <h3>CAN YOU CATCH THEM ALL????</h3>
            <p><button onClick = {getPokemon}>Fetch Pokemon</button></p>

            {
                listOfPokemon.map((pokeObj, i)=>{
                    return (
                        <div key = {i} style = {{border: "1px solid black"}}>
                            <h3>{pokeObj.name}</h3>
                            
                        </div>
                    )
                })
            }
        </>
    )
}


export default Pokemon;