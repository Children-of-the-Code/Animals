import * as React from 'react';
import {Link} from 'react-router-dom';
import { ChangePassword } from '../components/ChangePassword';

import '../profileUser.css';

export class UserProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser:[],
      fname : "",
      lname : "",
      email : "",
      address : "",
      loc_city : "",
      loc_state : "",
      loc_zip : 0,
      phone : 0,
      username: "",
      password: "",
      user_role: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
  }

  componentDidMount(){
    if (this.props.userid){
      fetch("https://animalrescueproject.azurewebsites.net/users/user/"+this.props.userid)
      .then(response=>response.json())
      .then(
        user=>{
          this.setState({
            currentUser:user,
            fname: user.first_name,
            lname: user.last_name,
            email: user.email,
            address: user.street_address,
            loc_city: user.city,
            loc_state: user.state,
            loc_zip: user.zip,
            phone: user.phone,
            username: user.username,
            password: user.password,
            user_role: user.role
          },
            console.log(user)
          )
        }
      )
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.userSubmit()
  }


  handleChange (fieldName, event) {
    this.setState({ [fieldName]: event.target.value });
  };

  userSubmit(){

    let data = {
      "user_id": this.props.userid,
      "first_name": this.state.fname,
      "last_name": this.state.lname,
      "email": this.state.email,
      "street_address": this.state.address,
      "city": this.state.loc_city,
      "state": this.state.loc_state,
      "zip": this.state.loc_zip,
      "phone": this.state.phone,
      "username": this.state.username,
      "password": this.state.password,
      "role": this.state.user_role
    }

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
            { this.props.userrole==="User"&&
              // Role == User ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                //View Inquiries - /InquiriesUser
                  //List inquiries made by user. Needs: userid
              <Link className="view-inquiries-link" to="/InquiriesUser">View Inquiries</Link>
            }
            { this.props.userrole==="User"&&
              //View Transactions - /TransactionsUser
                  //List of transactions made by user. Needs: userid
              <Link className="view-transactions-link" to="/TransactionsUser">View Transactions</Link>

            }
            { this.props.userrole==="Admin"&&
              // Role == Admin ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                //View/Process Inquiries - /InquiriesAdmin
                  //List of all inquiries. View pending have the option to process.
              <Link className="view-inquiries-link" to="/InquiriesAdmin">Process Inquiries</Link>
            }
            { this.props.userrole==="Admin"&&
                //View Transactions - /TransactionsAdmin
                  //List of all transactions
              <Link className="view-transactions-link" to="/TransactionsAdmin">View Transactions</Link>
            }
          </div>
          <div className="main">
            <h3>User Profile</h3>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="username">Username:</label><br/>
              <input type="text" id="username" name="username" value={this.state.username} onChange={event => this.handleChange("username", event)}></input><br/>
              
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

              <input type="submit" value="Submit"></input><br/>
            </form>
            <ChangePassword password={this.state.password} userid={this.props.userid}/>
          </div>
        </div>
      )
    }
  }