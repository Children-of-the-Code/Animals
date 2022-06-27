import * as React from 'react';
import { render } from 'react-dom';

import '../profileUser.css';

export class UserProfile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="container">
        <div class="sidenav">
          <a>Change Password</a>
          <a>View Inquiries</a>
          <a>View Transactions</a>
        </div>
        <div class="main">
          <h3>User Profile</h3>
          <form>
            <label for="fname">First Name:</label><br/>
            <input type="text" id="fname" name="fname"></input><br/>
            <label for="lname">Last Name:</label><br/>
            <input type="text" id="lname" name="lname"></input><br/>
            <label for="email">Email:</label><br/>
            <input type="email" id="email" name="email"></input><br/>
            <label for="address">Address:</label><br/>
            <input type="text" id="address" name="address"></input><br/>
            <label for="city">City:</label><br/>
            <input type="text" id="city" name="city"></input><br/>
            <label for="state">State:</label><br/>
            <input type="text" id="state" name="state"></input><br/>
            <label for="zip">Zipcode:</label><br/>
            <input type="text" id="state" name="state"></input><br/>
            <label for="phone">Phone Number:</label><br/>
            <input type="text" id="state" name="state"></input><br/><br/>
            <input type="submit" value="Submit"></input><br/>
          </form>
        </div>
      </div>
    )
  }
}