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
            user_id:"",

            salepercent:0
            

        }
    }
    componentDidMount(){  
        var temparray=[];
        if (this.props.userid&&this.props.currentanimalid){
            console.log("stepped into user");
            fetch("https://animalrescueproject.azurewebsites.net/inquiries/animallist/"+this.props.userid)
            .then(response=>response.json())
            .then(animal=>{animal.map(animals=>{temparray.push(animals)});this.setState({inquiryArray:temparray,user_id:this.props.userid},console.log(this.state.inquiryArray, console.log(this.state.currentAnimal)) ,this.check() )})
        }
        console.log()

        if (this.props.currentanimalid){
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{this.setState({currentAnimal:animal, salepercent:animal.fee/((100-animal.sale)/100)}, console.log())})
        }
    }
    componentWillUnmount(){
        this.setState({
            inquiry:false
        }, console.log(this.state.inquiry)) 
    }

    check(){  
        let checkboolean=false;
        console.log(this.props.currentanimalid);
     checkboolean=this.state.inquiryArray.every(this.check2,this.state.currentAnimal);
     console.log(checkboolean);
     if(checkboolean==false){
        
        this.setState({
            inquiry:true
        })
    }
    else{
       
        this.setState({
            inquiry:false
        })
    }
    }
    check2(item){
        console.log(item.animal_id)
        console.log(this.animal_id)
        if(item.animal_id===this.animal_id){
            return false;
        }else{
            return true;
        }
        
    }
    buttoncheck(loggedin, inquiry){
        if(!loggedin){
            return <Link className="loginbutton" to="/Login">Log in to submit an adoption inquiry</Link>;
        }else if(loggedin&&inquiry&&this.state.currentAnimal){
            return <span className="loginbutton">"Inquiry Submitted"</span>;            
        }else if(loggedin&&!inquiry){
                            return <button type="submit" onClick={()=>{this.addinquiry();}} className="loginbutton">Apply to adopt this animal!</button>;

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

                {this.state.currentAnimal.sale>0&&
                <span className="sale">
                    <p>Old Adoption Fee: ${parseFloat((this.state.currentAnimal.fee)/((100-this.state.currentAnimal.sale)/100).toFixed(2)).toFixed(2)}</p>
                    
                    <p>Discount: %{this.state.currentAnimal.sale}</p>
                    
                    
                    <p>Fee With Discount Included: ${this.state.currentAnimal.fee}</p>
                    
                </span>}
                {!this.state.currentAnimal.sale&&
                <p>Adoption Fee: ${this.state.currentAnimal.fee}</p>
                }

                <p>{this.buttoncheck(this.props.loggedin, this.state.inquiry)}
                    

                </p>
                <p>{this.text}</p>
                </div>
                }
            </div>
        )
    }
}