import * as React from 'react';

export class TransactionsUser extends React.Component{
    constructor(props){
      super(props);
      this.state={
        allTransactions:[]
      }
    }

    componentDidMount(){

      let temparray=[];
      
      if (this.props.userid){
        fetch("https://animalrescueproject.azurewebsites.net/donations/user/"+this.props.userid)
        .then(response=>response.json())
        .then(transaction => {
          transaction.map(transactions => {temparray.push(transactions)});
          this.setState({
            allTransactions:temparray
          }, console.log(this.state.allTransactions))
        })
      }
    }

    render(){
      return(
        <div className="container">
          <div className="main">
            <h3>Transactions</h3>
            <div className="results-list">

            {this.state.allTransactions.map(transaction => (
                  <p>Date: {transaction.date_added} | Amount: {transaction.amount} | Type: Donation</p>
                )
              )
            }
            </div>
          </div>
        </div>
      )
    }
}

