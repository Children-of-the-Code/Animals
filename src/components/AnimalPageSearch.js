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
            currentInquiry:[],
            inquirystatusarray:[],
            salepercent:0,
            cancelbool:false
        }
    }
    componentDidMount(){  
        this.inquiries();
        this.getcurrentanimalid();
        this.componentDidUpdate();
    }
    componentDidUpdate(){
        
        if(this.state.cancelbool){
            this.inquiries();
            this.setState({
                cancelbool:false
            },console.log(this.state.cancelbool))
        }
        this.buttoncheck();
    }

    componentWillUnmount(){
        this.setState({
            inquiry:false
        }, console.log(this.state.inquiry)) 
    }
    getcurrentanimalid(){
        if (this.props.currentanimalid){
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{this.setState({currentAnimal:animal, salepercent:animal.fee/((100-animal.sale)/100)}, console.log())})
        }
    }
    inquiries(){
        var temparray=[];
        var temparray2=[];
        if(this.props.userid){

            fetch("https://animalrescueproject.azurewebsites.net/inquiries/user/"+this.props.userid)
            .then(response=>response.json())
            .then(inquiry=>{inquiry.map(inquiries=>{temparray2.push(inquiries)});this.setState({inquirystatusarray:temparray2}, console.log(this.state.inquirystatusarray))})

        }
        if (this.props.userid&&this.props.currentanimalid){

            fetch("https://animalrescueproject.azurewebsites.net/inquiries/animallist/"+this.props.userid)
            .then(response=>response.json())
            .then(animal=>{animal.map(animals=>{temparray.push(animals)});this.setState({inquiryArray:temparray,user_id:this.props.userid},console.log(this.state.inquiryArray), console.log(this.state.currentAnimal) ,this.check() )})
        }
        console.log()

    }

   

    check(){  
        let checkboolean=true;
        
     checkboolean=this.state.inquiryArray.every(this.check2,this.state.currentAnimal);
     if(checkboolean==false){
        this.setState({
            inquiry:true
        }, console.log(this.state.inquiry), this.updateinquiry(true))
    }
    else{
        this.setState({
            inquiry:false
        }, console.log(this.state.inquiry))
    }
    
    }
    updateinquiry(bool){
        

        if(bool){
            console.log("https://animalrescueproject.azurewebsites.net/inquiries/getinquiry/user/"+this.props.userid+"/animal/"+this.props.currentanimalid)
            fetch("https://animalrescueproject.azurewebsites.net/inquiries/getinquiry/user/"+this.props.userid+"/animal/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(inquiry=>{this.setState({currentInquiry:inquiry},console.log(this.state.currentInquiry))})
        }

    }
    check2(item){
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
            return <button type="submit" onClick={()=>{this.cancelinquiry();}} className="loginbutton">"Cancel Adoption Inquiry"</button>;            
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
        this.setState({
            cancelbool:true
        },console.log(this.state.cancelbool))
        this.componentDidUpdate();
       
    }
    cancelinquiry(){        
        fetch("https://animalrescueproject.azurewebsites.net/inquiries/delete/"+this.state.currentInquiry.inquiry_id,{
            method: "DELETE",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            }
        })
        this.setState({
            cancelbool:true
        },console.log(this.state.cancelbool))
        this.componentDidUpdate();
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