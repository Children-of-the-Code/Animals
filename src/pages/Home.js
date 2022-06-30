import * as React from 'react';
import { AnimalCardSearch } from '../components/AnimalCardSearch';
import { AnimalPageSearch } from '../components/AnimalPageSearch';

export class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            animals:[],
            currentanimalid:0,
            animalsSale:[],
            sale:0
        }
    }

    componentDidMount(){
        this.updateFeatured();
    }
    updateFeatured(){
        fetch("https://animalrescueproject.azurewebsites.net/animals/featured",{
            mode:"cors"
        })
        .then(response=>response.json())
        .then(animal=>this.setState({animals:animal}), console.log())


        fetch("https://animalrescueproject.azurewebsites.net/animals/sale",{
            mode:"cors"
        })
        .then(response=>response.json())
        .then(animal=>this.setState({animalsSale:animal}), console.log())
    }
  
    navigateToAnimal(animalid, animalsale){
            this.setState({
            currentanimalid:animalid,
            sale:animalsale
        }, console.log(this.state.sale))
    }  



    render(){



        return(
            <div><div>
                <h2>Featured Animals Available for Adoption:</h2>
                </div>
                <div className="flex-box">
                <div className='results'>
                    <h3>Sale:</h3>
                    <div className='column'>
                        {this.state.animalsSale.map(animal=><div className="animalItem" onClick={()=>{this.navigateToAnimal(animal.animal_id, animal.sale)}}><AnimalCardSearch key={animal.animal_id} url={animal.url} description={animal.description}  name={animal.name} type={animal.type} breed={animal.breed} age={animal.age} gender={animal.gender} temperament={animal.temperament} gets_along={animal.gets_along} sale={animal.sale} fee={animal.fee}></AnimalCardSearch></div>)}
                    </div>
                </div>
                <div className='results'>
                    <h3>Last-Chance Love:</h3>
                    <div className='column'>
                        {this.state.animals.map(animal=><div className="animalItem" onClick={()=>{this.navigateToAnimal(animal.animal_id, animal.sale)}}><AnimalCardSearch key={animal.animal_id} url={animal.url} description={animal.description}  name={animal.name} type={animal.type} breed={animal.breed} age={animal.age} gender={animal.gender} temperament={animal.temperament} gets_along={animal.gets_along} fee={animal.fee}></AnimalCardSearch></div>)}
                    </div>
                </div>
                <div className='content'>
                    <div>
                        <h2>Your Pick</h2>
                        {this.state.currentanimalid!==0&&
                        <AnimalPageSearch key={this.state.currentanimalid} loggedin={this.props.loggedin} currentanimalid={this.state.currentanimalid} sale={this.state.sale} userid={this.props.userid}></AnimalPageSearch>
                        }
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}