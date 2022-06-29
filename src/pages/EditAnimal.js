import * as React from 'react';
import { AddAnimal } from '../components/AddAnimal';
import{DeleteAnimal} from '../components/DeleteAnimal';
import { ChangeAnimal } from '../components/ChangeAnimal';

export class EditAnimal extends React.Component{
    constructor(props){
        super(props)
        this.handleRefresh=this.handleRefresh.bind(this);
        this.state={
            animals:[],
            currentanimalid:0
        }
    }
    handleRefresh(){
        this.setState({
            animals:[]
        },console.log())
        this.updateList();
    }
    componentDidMount(){
        this.setState({
            animals:[]
        },console.log(this.state.animals))
        this.updateList();    
    }

    updateList(){
        fetch("https://animalrescueproject.azurewebsites.net/animals")
        .then(results=>results.json())
        .then(animal=>{this.setState({animals:animal}, console.log())})
    }

    navigateToAnimal(animalid){
        console.log(animalid);
        this.setState({
            currentanimalid:animalid
            },console.log(this.state.currentanimalid))
    }
  
    render(){
        return(
            <div>
                <div className="flex-box">
                    
                    <div className="search"><div>
                        <AddAnimal key={this.props.userid} role={this.props.role}></AddAnimal>
                        </div>
                    </div>
                    
                        {this.state.animals&&
                        <div className="results">
                            <h3>Click to Edit Animal:</h3>
                    {this.state.animals.map(animal=><div className="animalItem" onClick={()=>{this.navigateToAnimal(animal.animal_id)}}><DeleteAnimal key={animal.animal_id} animal={animal} description={animal.description}  name={animal.name} type={animal.type} breed={animal.breed} age={animal.age} gender={animal.gender} temperament={animal.temperament} gets_along={animal.gets_along} fee={animal.fee} sale={animal.sale}></DeleteAnimal></div>)}
                        </div>
                        }
                    
                    <div className="content">
                    <h2>Edit The Animal And Submit it!</h2>
                        {this.state.currentanimalid>0&&
                                <ChangeAnimal key={this.state.currentanimalid} handleRefresh={this.handleRefresh} loggedin={this.props.loggedin} currentanimalid={this.state.currentanimalid} userid={this.props.userid}/>
                            }
                    </div>
                </div>
            </div>
        )
    }
}