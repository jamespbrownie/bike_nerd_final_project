function PartCard({part}) {
    return (
        <div>
        <img className="partImage" src={part.image}/>
        <h1>{part.name}</h1>
        </div>
    )

}

export default PartCard