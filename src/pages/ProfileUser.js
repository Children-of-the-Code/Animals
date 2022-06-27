import * as React from 'react';

import '../profileUser.css';

export class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fname : "",
      lname : "",
      email : "",
      address : "",
      loc_city : "",
      loc_state : "",
      loc_zip : 0,
      phone : 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
  }


  handleChange (fieldName, event) {
    //const target = event.target;
    //var value = target.value;
    //const name = target.name;
    this.setState({ [fieldName]: event.target.value });
  };

  userSubmit(){
    // this.props.userid
    // this.props.username
    // this.props.password
    // this.props.user_role

    let data = {
      "user_id": 3,
      "first_name": this.state.fname,
      "last_name": this.state.lname,
      "email": this.state.email,
      "street_address": this.state.address,
      "city": this.state.loc_city,
      "state": this.state.loc_state,
      "zip": this.state.loc_zip,
      "phone": this.state.phone,
      "username": "adamant23",
      "password": "adamant",
      "role": "User"
    };

    fetch("https://animalrescueproject.azurewebsites.net/users/changeuserinfo", {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

    render(){
      return(
        <div className="container">
          <div className="sidenav">
            <a>Change Password</a>
            <a>View Inquiries</a>
            <a>View Transactions</a>
          </div>
          <div className="main">
            <h3>User Profile</h3>
            <form>
              <label htmlFor="fname">First Name:</label><br/>
              <input type="text" id="fname" name="fname" value={this.state.fname} onChange={event => this.handleChange("fname", event)}></input><br/>

              <label htmlFor="lname">Last Name:</label><br/>
              <input type="text" id="lname" name="lname" value={this.state.lname} onChange={event => this.handleChange("lname", event)}></input><br/>

              <label htmlFor="email">Email:</label><br/>
              <input type="email" id="email" name="email" value={this.state.email} onChange={event => this.handleChange("email", event)}></input><br/>

              <label htmlFor="address">Address:</label><br/>
              <input type="text" id="address" name="address" value={this.state.address} onChange={event => this.handleChange("address", event)}></input><br/>

              <label htmlFor="city">City:</label><br/>
              <input type="text" id="loc_city" name="loc_city" value={this.state.loc_city} onChange={event => this.handleChange("loc_city", event)}></input><br/>

              <label htmlFor="state">State:</label><br/>
              <input type="text" id="loc_state" name="loc_state" value={this.state.loc_state} onChange={event => this.handleChange("loc_state", event)}></input><br/>

              <label htmlFor="zip">Zipcode:</label><br/>
              <input type="text" id="loc_zip" name="loc_zip" value={this.state.loc_zip} onChange={event => this.handleChange("loc_zip", event)}></input><br/>

              <label htmlFor="phone">Phone Number:</label><br/>
              <input type="text" id="phone" name="phone" value={this.state.phone} onChange={event => this.handleChange("phone", event)}></input><br/><br/>

              <input type="submit" value="Submit" onClick={this.userSubmit}></input><br/>
            </form>
          </div>
        </div>
      )
    }
  }