import * as React from 'react'
import "../animalcardsearch.css"
export class AnimalCardSearch extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="animallist">
                <p><span className="animalnames">Name: {this.props.name}</span>
                <br></br>
                Type: {this.props.type}
                <br></br>
                Breed: {this.props.breed}
                <br></br>
                Age: {this.props.age}
                <br></br>
                Gender: {this.props.gender}
                <br></br>
                Temperament: {this.props.temperament}
                <br></br>
                Gets Along With: {this.props.gets_along}            
                <br></br>
                Adoption Fee: {this.props.fee}
                </p>
                <br></br>
            </div>
        )
    }
}