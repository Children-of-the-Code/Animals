import * as React from 'react';

export class ChangePassword extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentPassword : "",
      newPassword : "",
      confirmPassword : "",
      passwordSubmitted: false
      //password: ""
      //password: this.props.password [DOESN'T WORK FOR SOME REASON...]
    }

    this.verifyPassword = this.verifyPassword.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    //this.setState({ passwordVerified: false });
  }

  verifyPassword(){
    if(this.state.currentPassword == this.props.password){
      console.log("Entered password matches user's current password, proceeding...")
      if(this.state.newPassword == this.state.confirmPassword){
        console.log("New password confirmed, proceeding...")
        if(this.props.userid){
          console.log("Commencing submit password...")
          this.submitPassword(this.props.userid, this.state.newPassword)
        } else {
          console.log("Did not submit password because of userid. Password change failed.")
          this.setState({passwordSubmitted: false});
        }
      } else {
        console.log("Passwords did not match. Password change failed.")
        this.setState({passwordSubmitted: false});
      }
    } else {
      console.log("Could not verify user password. Password change failed. currentPassword = " + this.state.currentPassword + ", userPassword = " + this.props.password)
      this.setState({passwordSubmitted: false});
    }
  }

  submitPassword(id, pwd){

    let data = {
      "user_id": id,
      "password": pwd
    }

    fetch("https://animalrescueproject.azurewebsites.net/users/changepassword/", {
          method: "POST",
          mode: "cors",
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(this.setState({
        passwordSubmitted: true, 
        currentPassword : "",
        newPassword : "",
        confirmPassword : ""
        //password: pwd // Instead of props password, will now use the new password
      }))
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.verifyPassword()
  }


  handleChange (fieldName, event) {
    this.setState({ [fieldName]: event.target.value });
  };

  render(){
    return(
      <div>
        <h2>Change Password</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="currentPassword">Current Password:</label><br/>
          <input required type="password" id="currentPassword" name="currentPassword" value={this.state.currentPassword} onChange={event => this.handleChange("currentPassword", event)}></input>
          <br/>
          <label htmlFor="newPassword">New Password (6 Characters Minimum):</label><br/>
          <input required type="password" id="newPassword" name="newPassword" value={this.state.newPassword} minLength="6" onChange={event => this.handleChange("newPassword", event)}></input>
          <br/>
          <label htmlFor="confirmPassword">Confirm New Password Again:</label><br/>
          <input required type="password" id="confirmPassword" name="confirmPassword" value={this.state.confirmPassword} onChange={event => this.handleChange("confirmPassword", event)}></input>
          <br/>
          <input type="submit" value="Submit"></input>
          {this.state.passwordSubmitted == true&&
            <div><p>Success. Password changed.</p></div>
          }
        </form>
        
      </div>
    )
  }
}