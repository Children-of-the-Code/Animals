import * as React from 'react';

export class DonationForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      amount : 0,
      donationSubmitted : false,
      notEnough : false
    }
    this.submitDonation = this.submitDonation.bind(this);
    this.submitSuccess = this.submitSuccess.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.submitDonation(this.props.userid, this.state.amount)
  }

  submitDonation(userid, amount){

    if(amount > 0){
      let data = {
        "amount": amount,
        "user_id": userid
      }
  
      fetch("https://animalrescueproject.azurewebsites.net/donations/submit", {
                method: 'POST',
                mode: "cors",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response=>response.json())
            .then(this.setState({
              notEnough: false,
              donationSubmitted: true, 
              amount: 0
            }))
            .then(data => {
              console.log(data);
            })

    } else {
      console.log("Donation failed because amount was 0 or less.");
      this.setState({notEnough:true});
    }
  }

  submitSuccess(){
    this.setState({
      notEnough: false,
      donationSubmitted: true, 
      amount: 0
    })
  }

  handleChange (fieldName, event) {
    this.setState({ [fieldName]: event.target.value });
  };

  render(){ // Takes userid
    return(
      <div className='footer'>


        <h2 className="footerelement">Submit A Donation</h2>
        <p className="footerelement">How much would you like to donate?</p>

        <form onSubmit={this.handleSubmit} className="footerelement">
          <label htmlFor="amount">$</label>
          <input type="number" id="amount" name="amount" value={this.state.amount} onChange={event => this.handleChange("amount", event)} required></input>
          <button type="submit"  className="footerelement">Donate</button>
        </form>

        {this.state.donationSubmitted == true&&
          <p className="footerelement">Thanks for your donation!</p>
        }
        {this.state.notEnough == true&&
          <p className="footerelement">Please enter an amount more than 0.</p>
        }
      </div>
    )
  }
}