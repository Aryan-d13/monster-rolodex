import { Component } from "react";

class Card extends Component{
    render(){
        const { name, id, email } = this.props;
        return(
            <div>
            <div className='card-container' key={id}>
                <img src={`https://robohash.org/${id}/set=set1&size=180x180`} alt={`monster ${name}`} />
                <h2>{name}</h2>
                <p>{email}</p>
                </div>
            </div>
        )
        
    }

    
}
export default Card;