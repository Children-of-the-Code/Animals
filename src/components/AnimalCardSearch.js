import * as React from 'react'

export class AnimalCardSearch extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="animallist">
                <img class="searchimg" src={this.props.url} width="250px" height="250px"></img>
                <p><span className="animalnames">Name: {this.props.name}</span></p>
                
                <p>Type: {this.props.type}</p>
                
                <p>Breed: {this.props.breed}</p>
                
                <p>Age: {this.props.age}</p>
                
                <p>Gender: {this.props.gender}</p>
                
                <p>Temperament: {this.props.temperament}</p>
                
                <p>Gets Along With: {this.props.gets_along}</p>         
                
                {this.props.sale>0&&
                <span className="sale">
                    <p>Old Adoption Fee: ${parseFloat((this.props.fee)/((100-this.props.sale)/100).toFixed(2)).toFixed(2)}</p>
                    
                    <p>Discount: %{this.props.sale}</p>
                    
                    
                    <p>Fee With Discount Included: ${this.props.fee}</p>
                    
                </span>}

                {!this.props.sale&&
                <p>Adoption Fee: ${this.props.fee}</p>
                }

            </div>
        )
    }
}