import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const DescripcionPersonajes = () => {
const {id}=useParams()
const[character, setCharacter]=useState()


function descriptionCharacter(){
    fetch ("https://www.swapi.tech/api/people/" + id)
    .then (response=>response.json())
    .then (data=>console.log(data.result.properties))
    .catch(error=>console.error(error))
}

useEffect(()=>{
    descriptionCharacter()
},[])

    return(
        <div className="ContainerPersonaje">
            <h1>Descripción del Personaje</h1>

        </div>

    )

}

export default DescripcionPersonajes;