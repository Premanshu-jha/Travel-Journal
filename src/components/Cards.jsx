import Card from './Card.jsx'
import './Cards.css'
import destinations from './destinations.js'

export default function Cards(){
     return (
        <div class="cards">
       { 
        destinations.map((destination)=>{
             return <Card key={destination.id} cardObj={destination}/>
        })
    }
    </div>
     )
}