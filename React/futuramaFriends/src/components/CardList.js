import Card from './Card.js'

const CardList = ({ contacts }) => {
    return(
        <div className="card-container">
            {
                contacts.map((user, index) => {return <Card
                    key={index} 
                    id={contacts[index].id} 
                    name={contacts[index].name} 
                    email={contacts[index].email} 
                    picture={`https://robohash.org/${contacts[index].name}?200x200`} 
                />})
            }
        </div>
    );
}

export default CardList;