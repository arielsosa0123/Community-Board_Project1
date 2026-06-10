const Card = ({ title, date, description, ticketUrl } ) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p className="date">{date}</p>
            <p>{description}</p>
            <a href={ticketUrl} target="_blank">
                Buy Tickets
            </a>
        </div>
    )
}

export default Card;