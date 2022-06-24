import * as React from 'react';


export class Search extends React.Component{
    constructor(props){
        super(props);
        this.state={
            age:0,
            age2:0,
            gender:"",
            temperament:"",
            fee:0,
            fee2:0,
            breed:"",
            breed2:"",
            breed3:"",
            gets_along:"",
            sortby:"",
            orderby:""
        }
            

        
    }

    render(){
        return(
            <div>
                <ul>
                <li>Age Range: 
                <input value={this.state.age}></input> to 
                <input value={this.state.age2}></input>
                </li>
                <li>Gender:
                <select name="gender">
                    <option value="">Any</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </li>
                <li>Temperament: 
                <select name="temperament">
                <option value="">Any</option>
                <option value="Mild">Mild</option>
                <option value="Medium">Medium</option>
                <option value="Hot">Hot</option>
                <option value="Spicy">Spicy</option>
                </select>
                </li>
                <li>Fee Range:
                <input value={this.state.fee}></input> to 
                <input value={this.state.fee2}></input>
                </li>
                <li>Type:
                    <select name="type">
                    <option value="">Any</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    </select>
                    </li>
                <li>Breed: <select name="breed">
                    <option value="">Any</option>
                    </select>
                    <select name="breed2">
                    <option value="">Any</option>
                    </select>
                    <select name="breed3">
                    <option value="">Any</option>
                    </select>
                </li>
                <li>
                    Gets Along:
                    <select name="gets_along">
                    <option value="">Any</option>
                    <option value="Dogs">Dogs</option>
                    <option value="Cats">Cats</option>
                    <option value="Kids">Kids</option>
                    <option value="AllAnimal">All Animals</option>
                    <option value="AllAnimalKids">All Animals and Children</option>
                    <option value="None">none</option>
                    </select>
                </li>
                <li>Sort By:
                    <select name="sortby">
                        <option value="">No Sort</option>
                        <option value="name">Name</option>
                        <option value="temperament">Temperament</option>
                        <option value="age">Age</option>
                        <option value="fee">Fee</option>
                        <option value="breed">Breed</option>
                    </select>
                    <select name="orderby">
                        <option value="">Ascending</option>
                        <option value="d">Descending</option>
                    </select>
                </li>  
                
                </ul>
            </div>
        )
    }


}