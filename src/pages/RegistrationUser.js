import * as React from 'react';

import '../register.css';

export class RegistrationUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fname:"",
            lname:"",
            email:"",
            address:"",
            city:"",
            state:"",
            zip:0,
            phone:0,
            username:"",
            password:"",
            password2:"",
            message:""
        }
    }

    handleChange(fieldname, event){
        this.setState({
            [fieldname]:event.target.value
        });
    }

    handleSubmit=(event)=>{
        let fname=this.state.fname;
        let lname=this.state.lname;
        let email=this.state.email;
        let address=this.state.address;
        let city=this.state.city;
        let state=this.state.state;
        let zip=this.state.zip;
        let phone=this.state.phone;
        let username=this.state.username;
        let password=this.state.password;
        let password2=this.state.password2;
        event.preventDefault();
        if(password == password2){

        
            fetch("https://animalrescueproject.azurewebsites.net/users/add", {
                method:"POST",
                mode:"cors",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "first_name":this.state.fname,
                    "last_name":this.state.lname,
                    "email":this.state.email,
                    "street_address":this.state.address,
                    "city":this.state.city,
                    "state":this.state.state,
                    "zip":this.state.zip,
                    "phone":this.state.phone,
                    "username":this.state.username,
                    "password":this.state.password
                })
            })
            this.setState({
                message:"Successful Registration! Please Click Login at the top to Log in!"
            })
        }else{
            this.setState({
                message:"Your passwords must match!"
            })
        }
    }

    render(){
        return (
            <div className='form'>
                <div>
                    <h1>User Registration</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder= "First Name" onChange={event => this.handleChange("fname", event)} type="text" required/><br></br>

                    <input placeholder="Last Name" onChange={event => this.handleChange("lname", event)} type="text" required/><br></br>

                    <input placeholder='Email' onChange={event => this.handleChange("email", event)}  type="email" required/><br></br>

                    <input placeholder='Address' onChange={event => this.handleChange("address", event)} type="text" required/><br></br>

                    <input placeholder='City' onChange={event => this.handleChange("city", event)} type="text" required/><br></br>

                    <input placeholder='State' onChange={event => this.handleChange("state", event)} type="text" required/><br></br>

                    <input placeholder='Zip' onChange={event => this.handleChange("zip", event)} type="number" required/><br></br>

                    <input placeholder='Phone Number' onChange={event => this.handleChange("phone", event)} type="number" required/><br></br>

                    <input placeholder='Username' onChange={event => this.handleChange("username", event)} type="text" required/><br></br>

                    <input placeholder='Password' onChange={event => this.handleChange("password", event)} type="password" required/><br></br>

                    <input placeholder='Check Password' onChange={event => this.handleChange("password2", event)} type="password" required/><br></br>

                    <button type="submit">Submit User</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
}