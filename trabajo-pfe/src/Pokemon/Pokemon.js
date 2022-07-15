import React, { useEffect, useState } from "react"

const Pokemon = props => {
    const [texto, setTexto] = useState("")
    const [pokemonABuscar, setPokemonABuscar] = useState("muk")
    const [imgPokemonFront, setImgPokemonFront] = useState("")
    const [imgPokemonShiny, setImgPokemonShiny] = useState("")

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonABuscar)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data.sprites.front_default)
                setImgPokemonFront(data.sprites.front_default)
                setImgPokemonShiny(data.sprites.front_shiny)
            }
        )
    }, [pokemonABuscar] )
    const handleChange = (e) => {
        setTexto(e.target.value)
    }
    const handleClick = () => {
        setPokemonABuscar(texto)
    }
    return (
        <>
            Composicion jeje <br></br>
            <input type="text" onChange={ (e) => handleChange(e) }/> <br></br>
            <button onClick={handleClick}>Buscar</button> <br></br>
            <img src={imgPokemonFront}/>
            <img src={imgPokemonShiny}/>
        </>
    )
}

export default Pokemon