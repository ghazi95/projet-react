import { useState } from "react"
import Button from 'react-bootstrap/Button';


const Facture =() => {
    const [fact,setFact]=useState(
        {
            "numfact":100,
            "datefact":"06/03/2024",
            "mtfact":2000

        }
    )
    const handleChange=()=>{
        setFact({...fact,mtfact:3000})
    }
    return (
        <div>
            <div className="im">
                Facture Numero : {fact.numfact}
                Date Facture : {fact.datefact}
                Montant facture : {fact.mtfact}

            </div>
            <Button variant="success" onClick={()=>handleChange()}>Modifier</Button>
        </div>
    )
}
export default Facture