import * as React from 'react';

export class InquiriesUser extends React.Component{
    constructor(props){
      super(props);
      this.state={
        allInquiries:[]
      }
    }

    componentDidMount(){

      let temparray=[];
      
      if (this.props.userid){
        fetch("https://animalrescueproject.azurewebsites.net/inquiries/user/"+this.props.userid)
        .then(response=>response.json())
        .then(inquiry => {
          inquiry.map(inquiries => {temparray.push(inquiries)});
          this.setState({
            allInquiries:temparray
          }, console.log(this.state.allInquiries))
        })
      }
    }

    render(){
      return(
        <div className="container">
          <div className="main">
            <h3>Inquiries</h3>
            <div className="results-list">

            {this.state.allInquiries.map(inquiry => (
                  <p>Name: {inquiry.animal.name} | Fee: {inquiry.animal.fee} | Status: {inquiry.status}</p>
                )
              )
            }

            </div>
          </div>
        </div>
      )
    }
}

//{this.getInquiryStatus(this.props.userid, animal.animal_id)}

/*
  {Fruits.map(data => (
        <p>{data.name}</p>
  ))}
*/

/*
{this.state.animals &&
  <div className='results'>
    <div>
      {
        this.state.animals.map(
          animal =>
            <div className="animalItem" onClick={()=>{this.navigateToAnimal(animal.animal_id)}}>
              <AnimalCardSearch key={animal.animal_id} description={animal.description}  name={animal.name} type={animal.type} breed={animal.breed} age={animal.age} gender={animal.gender} temperament={animal.temperament} gets_along={animal.gets_along} fee={animal.fee}>
              </AnimalCardSearch>
            </div>
        )
      }
    </div>
  </div>

}*/