import './Rental.css'

export default function Rental({ properties }) {
    return (
        <div className="PropertyList">
        {properties.map((property) =>( <div className='Property' key="{property.id}">
            <h1>{property.name}</h1>
            <h2>${property.price}</h2>
            <h3>{property.rating}⭐️</h3>
        </div>)
            )}
        </div>
    );
    
}