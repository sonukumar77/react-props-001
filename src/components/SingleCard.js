
const SingleCard = ({data}) => {
  
    return(
        <div className="card">
            <div className="cardHeader" style={{backgroundColor:data.color}}></div>
            <div className="cardBody">
                <h5>{data.color}</h5>
                <p style={{color:data.color}}>{data.title}</p>
            </div>
            
        </div>
    )
}

export default SingleCard;