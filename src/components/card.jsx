import React from "react";


class Card extends React.Component{

    render(){
        return(
            
            <>
            <img src={this.props.path}  className="car-image" />
              <h2 className="car-name">Name: {this.props.name}</h2>
              <h2 className="car-price">Price: ${this.props.price}</h2>
            </>
        )
    }
}


export default Card

// HTMLQuoteElement?fsdf