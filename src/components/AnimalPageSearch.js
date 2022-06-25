import * as React from 'react';
import '../animalpagesearch.css';

export class AnimalPageSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentanimalid:0,
            currentAnimal:[]
        
        }
    }
    componentDidMount(){
        if (this.props.currentanimalid){
            console.log(this.props.currentanimalid);
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{console.log(animal);this.setState({currentAnimal:animal})})
        }
    }


    render(){
        return(
            <div>
                {this.state.currentAnimal&&
                <div className="contentcard"><p>Name: {this.state.currentAnimal.name}</p><p>Type: {this.state.currentAnimal.type}</p><p>Breed: {this.state.currentAnimal.breed}</p><p>Gender: {this.state.currentAnimal.gender}</p><p>Temperament: {this.state.currentAnimal.temperament}</p><p>Description: {this.state.currentAnimal.description}</p><p>Gets along with: {this.state.currentAnimal.gets_along}</p><p>Adoption Fee: {this.state.currentAnimal.fee}</p></div>
                }
            </div>
        )
    }
}