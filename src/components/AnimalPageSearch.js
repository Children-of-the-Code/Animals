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
            text:"",
            user_id:""

        }
    }
    componentDidMount(){

        if (this.props.currentanimalid){
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{this.setState({currentAnimal:animal}, console.log())})
        }
        
        if (this.props.userid&&this.props.currentanimalid){
            console.log("stepped into user");
            fetch("https://animalrescueproject.azurewebsites.net/inquiries/animallist/"+this.props.userid)
            .then(response=>response.json())
            .then(animal=>{this.setState({inquiryArray:animal,user_id:this.props.userid}, console.log(this.state.user_id))})
            if(this.state.inquiryArray.some(e=>e===this.state.currentAnimal)){
                console.log(true);
                this.setState({
                    inquiry:true
                })
            }else{
                console.log(false);
                this.setState({
                    inquiry:false
                })
            }

        }
        
        
    }
    buttoncheck(loggedin, inquiry){

        
        if(!loggedin){
            return <Link className="loginbutton" to="/Login">Log in to submit an adoption inquiry</Link>;
        }else if(loggedin&&!inquiry){
                            return <button type="button" onClick={()=>{this.addinquiry();}} className="loginbutton">Apply to adopt this animal!</button>;

        }else if(loggedin&&inquiry){
            return <span className="loginbutton">"You have already put in an inquiry for this animal"</span>;            
        }
    }
    addinquiry(){
        
        fetch("https://animalrescueproject.azurewebsites.net/inquiries/submit",{
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "user_id":this.state.user_id,
                "animal_id":this.state.currentAnimal.animal_id
            })
        })    
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
                <p>{this.buttoncheck(this.props.loggedin, this.state.inquiry)}
                    
                </p>
                <p>{this.text}</p>
                </div>
                }
            </div>
        )
    }
}