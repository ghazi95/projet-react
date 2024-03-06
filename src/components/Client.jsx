import { useState } from "react"
import "./style.css"
import Button from 'react-bootstrap/Button';

const Client =() => {
    const[nom,setNom]=useState("ESPS")
    const[ville,setVille]=useState("Sfax")
    const[adresse,setAdresse]=useState("Route Elain")
    const modifier=()=>{
        setNom("Université")
        setVille("Sousse")
        setAdresse("Msaken")
    }
    return (
        <div>
            <h1>Nom est : {nom}</h1>
            <h1>Ville est :{ville}</h1>
            <h1>adresse  est : {adresse}</h1>
            
            <Button variant="success" onClick={()=>modifier()}>Modifier</Button>
        </div>
    )
}
export default Client