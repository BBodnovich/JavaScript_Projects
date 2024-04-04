function Card({name, picture, email}) {

    return (
        <div className="card">
            <img alt="" src={picture}/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card