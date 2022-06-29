import * as React from 'react';


export class DeleteAnimal extends React.Component{
    constructor(props){
        super(props)
        this.setState=({
            currentAnimal:[]
        })
    }
    



    componentDidMount(){
        if (this.props.currentanimalid){
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{this.setState({currentAnimal:animal}, console.log(animal))})
        }
    }


    render(){
        return(
            <div>
                <div className="animallist">
                <p><span className="animalnames">Name: {this.props.name}</span></p>
                
                <p>Type: {this.props.type}</p>
                
                <p>Breed: {this.props.breed}</p>
                
                <p>Age: {this.props.age}</p>
                
                <p>Gender: {this.props.gender}</p>
                
                <p>Temperament: {this.props.temperament}</p>
                
                <p>Gets Along With: {this.props.gets_along}</p>         

                <p>Adoption Fee: ${this.props.fee}</p>
                <p>Sale: %{this.props.sale}</p>
                

            </div>
            </div>
        )
    }
}