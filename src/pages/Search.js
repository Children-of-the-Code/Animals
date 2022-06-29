import * as React from 'react';
import { AnimalCardSearch } from '../components/AnimalCardSearch';

import { AnimalPageSearch } from '../components/AnimalPageSearch';


export class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age:0,
            age2:0,
            gender:"",
            type:"",
            temperament:"",
            fee:0,
            fee2:0,
            breed:"",
            breed2:"",
            breed3:"",
            gets_along:"",
            sortby:"",
            orderby:"",
            animals:[],
            currentanimalid:0
        }           

    }

    componentDidMount(){
        this.updateSearch();
    }

    componentDidUpdate(){
    }


    updateSearch(){
        let age=this.state.age;
        let age2=this.state.age2;
        let gender=this.state.gender;
        let temperament=this.state.temperament;
        let type=this.state.type;
        let fee=this.state.fee;
        let fee2=this.state.fee2;
        let breed=this.state.breed;
        let breed2=this.state.breed2;
        let breed3=this.state.breed3;
        let gets_along=this.state.gets_along;
        let sortby=this.state.sortby;
        let orderby=this.state.orderby


        fetch("https://animalrescueproject.azurewebsites.net/animals/search", {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "age":age,
                "age2":age2,
                "gender":gender,
                "type":type,
                "temperament":temperament,
                "fee":fee,
                "fee2":fee2,
                "breed":breed,
                "breed2":breed2,
                "breed3":breed3,
                "gets_along":gets_along,
                "sortby":sortby,
                "orderby":orderby
            })
        })
        .then(response=>response.json())
        .then(animalsArray=>this.setState({animals:animalsArray}));
    }

  

    handleChange(fieldName, event){
        this.setState({
            [fieldName]:event.target.value
        }, ()=>{
            this.updateSearch();
        });
        
    }


    render(){
        return(
            <div className="flex-box">
                <div className="search">
                    <div className="searchfixed">
                <ul>
                <li><span className="searchtitles">Age Range: </span><br></br>
                <input type="number" value={this.state.age} onChange={event => this.handleChange("age", event)}></input><br></br> 
                to </li><li>
                <input type="number" value={this.state.age2} onChange={event => this.handleChange("age2", event)}></input>
                </li>
                <br></br>
                <li><span className="searchtitles">Gender:</span><br></br>
                <select name="gender"onChange={event=>this.handleChange("gender", event)}>
                    <option value="">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </li>
                <br></br>
                <li><span className="searchtitles">Temperament: </span><br></br>
                <select name="temperament" onChange={event=>this.handleChange("temperament",event)}>
                    <option value="">Any</option>
                    <option value="Mild">Mild</option>
                    <option value="Medium">Medium</option>
                    <option value="Hot">Hot</option>
                    <option value="Spicy">Spicy</option>
                </select>
                </li>
                <br></br>
                <li><span className="searchtitles">Fee Range:</span><br></br>
                <input type="number" value={this.state.fee} onChange={event =>this.handleChange("fee",event)}></input><br></br>
                to
                </li><li>
                <input type="number" value={this.state.fee2} onChange={event=>this.handleChange("fee2",event)}></input>
                </li>
                <br></br>
                <li><span className="searchtitles">Type:</span><br></br>
                    <select name="type" onChange={event=>this.handleChange("type",event)}>
                    <option value="">Any</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    </select>
                    </li><br></br>
                <li><span className="searchtitles">Breed(select up to 3):</span><br></br> <select name="breed" onChange={event=>this.handleChange("breed",event)}>
                        <option value="">Any</option>
                        <option value="Abyssinian">Abyssinian</option>
                        <option value="Aussiedoodle">Aussiedoodle</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Bombay">Bombay</option>
                        <option value="Bulldog">Bulldog</option>
                        <option value="Calico">Calico</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Dalmatian">Dalmatian</option>
                        <option value="Feist">Feist</option>
                        <option value="Greyhound">Greyhound</option>
                        <option value="Havana">Havana</option>
                        <option value="Hound">Hound</option>
                        <option value="Husky">Husky</option>
                        <option value="Jindo">Jindo</option>
                        <option value="Labrador">Labrador</option>
                        <option value="Manx">Manx</option>
                        <option value="Mastiff">Mastiff</option>
                        <option value="Mix">Mix</option>
                        <option value="Persian">Persian</option>
                        <option value="Ocicat">Ocicat</option>
                        <option value="Other">Other</option>
                        <option value="Ragdoll">Ragdoll</option>
                        <option value="Rottweiler">Rottweiler</option>
                        <option value="Shepherd">Shepherd</option>
                        <option value="Siamese">Siamese</option>
                        <option value="Sphynx">Sphynx</option>
                        <option value="Tabby">Tabby</option>
                        <option value="Tuxedo">Tuxedo</option>
                    </select><br></br>
                    <select name="breed2"onChange={event=>this.handleChange("breed2",event)}>
                        <option value="">Any</option>
                        <option value="Abyssinian">Abyssinian</option>
                        <option value="Aussiedoodle">Aussiedoodle</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Bombay">Bombay</option>
                        <option value="Bulldog">Bulldog</option>
                        <option value="Calico">Calico</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Dalmatian">Dalmatian</option>
                        <option value="Feist">Feist</option>
                        <option value="Greyhound">Greyhound</option>
                        <option value="Havana">Havana</option>
                        <option value="Hound">Hound</option>
                        <option value="Husky">Husky</option>
                        <option value="Jindo">Jindo</option>
                        <option value="Labrador">Labrador</option>
                        <option value="Manx">Manx</option>
                        <option value="Mastiff">Mastiff</option>
                        <option value="Mix">Mix</option>
                        <option value="Persian">Persian</option>
                        <option value="Ocicat">Ocicat</option>
                        <option value="Other">Other</option>
                        <option value="Ragdoll">Ragdoll</option>
                        <option value="Rottweiler">Rottweiler</option>
                        <option value="Shepherd">Shepherd</option>
                        <option value="Siamese">Siamese</option>
                        <option value="Sphynx">Sphynx</option>
                        <option value="Tabby">Tabby</option>
                        <option value="Tuxedo">Tuxedo</option>                    
                        </select><br></br>
                    <select name="breed3" onChange={event=>this.handleChange("breed3",event)}>
                        <option value="">Any</option>
                        <option value="Abyssinian">Abyssinian</option>
                        <option value="Aussiedoodle">Aussiedoodle</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Bombay">Bombay</option>
                        <option value="Bulldog">Bulldog</option>
                        <option value="Calico">Calico</option>
                        <option value="Chihuahua">Chihuahua</option>
                        <option value="Dalmatian">Dalmatian</option>
                        <option value="Feist">Feist</option>
                        <option value="Greyhound">Greyhound</option>
                        <option value="Havana">Havana</option>
                        <option value="Hound">Hound</option>
                        <option value="Husky">Husky</option>
                        <option value="Jindo">Jindo</option>
                        <option value="Labrador">Labrador</option>
                        <option value="Manx">Manx</option>
                        <option value="Mastiff">Mastiff</option>
                        <option value="Mix">Mix</option>
                        <option value="Persian">Persian</option>
                        <option value="Ocicat">Ocicat</option>
                        <option value="Other">Other</option>
                        <option value="Ragdoll">Ragdoll</option>
                        <option value="Rottweiler">Rottweiler</option>
                        <option value="Shepherd">Shepherd</option>
                        <option value="Siamese">Siamese</option>
                        <option value="Sphynx">Sphynx</option>
                        <option value="Tabby">Tabby</option>
                        <option value="Tuxedo">Tuxedo</option>
                    </select>
                </li><br></br>
                <li>
                <span className="searchtitles">Gets Along:</span><br></br>
                    <select name="gets_along"onChange={event=>this.handleChange("gets_along",event)}>
                    <option value="">Any</option>
                    <option value="Dogs">Dogs</option>
                    <option value="Cats">Cats</option>
                    <option value="Kids">Kids</option>
                    <option value="AllAnimal">All Animals</option>
                    <option value="AllAnimalKids">All Animals and Children</option>
                    <option value="None">none</option>
                    </select>
                </li><br></br>
                <li><span className="searchtitles">Sort By:</span><br></br>
                    <select name="sortby"onChange={event=>this.handleChange("sortby",event)}>
                        <option value="">No Sort</option>
                        <option value="name">Name</option>
                        <option value="temperament">Temperament</option>
                        <option value="age">Age</option>
                        <option value="fee">Fee</option>
                        <option value="breed">Breed</option>
                    </select>
                    <select name="orderby"onChange={event=>this.handleChange("orderby",event)}>
                        <option value="">Ascending</option>
                        <option value="d">Descending</option>
                    </select>
                </li>  
                
                </ul>
                </div>
                
                </div>
                {this.state.animals &&
                <div className='results'>
                    <div>
                        {this.state.animals.map(animal=><div className="animalItem" onClick={()=>{this.navigateToAnimal(animal.animal_id)}}><AnimalCardSearch key={animal.animal_id} description={animal.description}  name={animal.name} type={animal.type} breed={animal.breed} age={animal.age} gender={animal.gender} temperament={animal.temperament} gets_along={animal.gets_along} fee={animal.fee}></AnimalCardSearch></div>)}
                    </div>
                </div>
                    }
                    {this.state.animals.length===0 &&
                <div className='results'>
                   <p>Nothing Matched Your Search!</p>
                </div>
                    }

                    <div className='content'>
                        {this.state.currentanimalid!==0&&
                        <AnimalPageSearch key={this.state.currentanimalid} loggedin={this.props.loggedin} currentanimalid={this.state.currentanimalid} userid={this.props.userid}></AnimalPageSearch>
                        }
                    </div>
                    
            </div>
            
        )
    }

    navigateToAnimal(animalid){
        this.setState({
        currentanimalid:animalid
        })
    }


}
