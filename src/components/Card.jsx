import './Card.css'
export default function Card({cardObj}){
    const {title,location,coordinates,startDate,endDate,description,imageUrl} = cardObj;
     return (
        <div className="card">
           <img src={imageUrl} className="locationImage"/>
           <div className="information">

             <div className="country">
               <img src='/LocationIcon.png' className="locationIcon"/>
               <span className="countryName">{location}</span>
               <a href={`https://www.google.com/maps?q=${coordinates}`} target="_blank">View in Google Maps</a>
             </div>
             
             <span className="city">{title}</span>
             <span className="duration">{`${startDate} - ${endDate}`}</span>
             <span className="cityDescription">
                {description}
             </span>
            
           </div>
        </div>
     )
}