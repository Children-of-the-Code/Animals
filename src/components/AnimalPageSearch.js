import * as React from 'react';
import {Link} from 'react-router-dom';

export class AnimalPageSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentanimalid:0,
            currentAnimal:[],
            inquiryArray:[],
            inquiry:false,
            inquiryandlogin:false
        
        }
    }
    componentDidMount(){

        if (this.props.currentanimalid){
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{console.log(animal);this.setState({currentAnimal:animal})})
        }
        console.log(this.props.userid);
        if (this.props.userid&&this.props.currentanimalid){
            console.log("stepped into user");
            fetch("https://animalrescueproject.azurewebsites.net/inquiries/user/"+this.props.userid)
            .then(response=>response.json())
            .then(animal=>{console.log(animal);this.setState({inquiryArray:animal})})

        }
        console.log(this.state.inquiryArray);
       
        if(this.state.inquiryArray[0].includes(this.props.currentAnimal)){
            console.log(true);
            this.setState({
                inquiry:true
            })
        }
        console.log(this.state.inquiry)
        
    }
    


    render(){
        return(
            <div>
                {this.state.currentAnimal&&
                <div className="contentcard">
                <p>Name: {this.state.currentAnimal.name}</p>
                <p>Type: {this.state.currentAnimal.type}</p>
                <p>Breed: {this.state.currentAnimal.breed}</p>
                <p>Gender: {this.state.currentAnimal.gender}</p>
                <p>Temperament: {this.state.currentAnimal.temperament}</p>
                <p>Description: {this.state.currentAnimal.description}</p>
                <p>Gets along with: {this.state.currentAnimal.gets_along}</p>
                <p>Adoption Fee: {this.state.currentAnimal.fee}</p>
                <p>{!this.props.userid&&
                    <Link className="loginbutton" to="/Login">Log in to submit an adoption inquiry</Link>               
                    }
                    {!this.state.inquiry&&
                    <button type="button" onClick={this.addinquiry} className="loginbutton">Apply to adopt this animal!</button>}
                </p>
                </div>
                }
            </div>
        )
    }
}