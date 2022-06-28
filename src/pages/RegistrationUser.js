import * as React from 'react';

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
            role:""
        }
    }

    handleChange(fieldname, event){
        this.setState({
            [fieldName]:event.target.value
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
        let role=this.state.role;
        event.preventDefault();
        fetch("https://animalrescueproject.azurewebsites.net/users/registration", {
            method:"POST",
            mode:"cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fname":this.state.fname,
                "lname":this.state.lname,
                "email":this.state.email,
                "address":this.state.address,
                "city":this.state.city,
                "state":this.state.state,
                "zip":this.state.zip,
                "phone":this.state.phone,
                "username":this.state.username,
                "password":this.state.password,
                "role":this.state.role
            })
        })
    }

    render(){
        return (
            <div className='form'>
                <div>
                    <h1>User Registration</h1>
                </div>
                <form>
                    <label className="label">First Name</label><br></br>
                    <input onChange={event => this.handleChange("fname", event)} value={this.state.fname} type="text" />

                    <label className="label">Last Name</label><br></br>
                    <input onChange={event => this.handleChange("lname", event)} value={this.state.lname} type="text" />

                    <label className="label">Email</label><br></br>
                    <input onChange={event => this.handleChange("email", event)} value={this.state.email} type="email" />

                    <label className="label">Street Address</label><br></br>
                    <input onChange={event => this.handleChange("address", event)} value={this.state.address} type="text" />\

                    <label className="label">City</label><br></br>
                    <input onChange={event => this.handleChange("city", event)} value={this.state.city} type="text" />

                    <label className="label">State</label><br></br>
                    <input onChange={event => this.handleChange("state", event)} value={this.state.state} type="text" />

                    <label className="label">Zip Code</label><br></br>
                    <input onChange={event => this.handleChange("zip", event)} value={this.state.zip} type="number" />

                    <label className="label">Phone Number</label><br></br>
                    <input onChange={event => this.handleChange("phone", event)} value={this.state.phone} type="number" />

                    <label className="label">Username</label><br></br>
                    <input onChange={event => this.handleChange("username", event)} value={this.state.username} type="text" />

                    <label className="label">Password</label><br></br>
                    <input onChange={event => this.handleChange("password", event)} value={this.state.password} type="text" />

                    <label className="label">User Role</label><br></br>
                    <select name="role" onChange={event => this.handleChange("role", event)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>

                    <button onClick={handleSubmit} type="submit">Submit User</button>
                </form>
            </div>
        );
    }
}