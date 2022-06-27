import * as React from 'react';
export class AddAnimal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "name":"",
            "description": "",
            "age": 0,
            "gender": "",
            "date_added": "",
            "temperament": "",
            "fee": 0.0,
            "type": "",
            "breed": "",
            "gets_along": "",
            "url": "",
            "sale": 0.0

        }
    }
    render(){
        return(
            <div>
                <h3 className='AddAnimalHeader'>Add your animal here:</h3>
                <li><span className="AddAnimalText">Enter name: </span><br></br>
                <input type="text" value={this.state.name} onChange={event => this.updateInputValue("name", event)}></input><br></br>
                </li>
                <li><span className="AddAnimalText">Enter description: </span><br></br>
                <input type="text" value={this.state.description} onChange={event => this.updateInputValue("description", event)}></input><br></br>
                </li>
                <li><span className="AddAnimalText">Enter age: </span><br></br>
                <input type="number" value={this.state.age} onChange={event => this.updateInputValue("age", event)}></input><br></br>
                </li>
                <li>
                <span className="AddAnimalText">Select gender: </span><br></br>
                <select name="gender"onChange={event=>this.updateInputValue("gender", event)}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> 
                </li>
                <li>
                <span className="AddAnimalText">Select temperament: </span><br></br>
                <select name="temperament"onChange={event=>this.updateInputValue("temperament", event)}>
                    <option value="Mild">Mild</option>
                    <option value="Medium">Medium</option>
                    <option value="Hot">Hot</option>
                    <option value="Spicy">Spicy</option>
                </select> 
                </li>
                <li><span className="AddAnimalText">Enter fee: </span><br></br>
                <input type="number" value={this.state.fee} onChange={event => this.updateInputValue("fee", event)}></input><br></br>
                </li>
                <li>
                <span className="AddAnimalText">Select type: </span><br></br>
                <select name="type"onChange={event=>this.updateInputValue("type", event)}>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                </select> 
                </li>
                <li>
                <span className="AddAnimalText">Select breed: </span><br></br>
                <select name="breed"onChange={event=>this.updateInputValue("breed", event)}>
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
                </li>
                <li>
                <span className="AddAnimalText">Select who gets along with: </span><br></br>
                <select name="gets_along"onChange={event=>this.updateInputValue("gets_along", event)}>
                    <option value="Dogs">Dogs</option>
                    <option value="Cats">Cats</option>
                    <option value="Kids">Kids</option>
                    <option value="AllAnimal">All Animals</option>
                    <option value="AllAnimalKids">All Animals and Children</option>
                    <option value="None">none</option>
                </select> 
                </li>
                <li><span className="AddAnimalText">Upload image: </span><br></br>
                <input type="text" value={this.state.url} onChange={event => this.updateInputValue("url", event)}></input><br></br>
                </li>
                <li><span className="AddAnimalText">Enter sale: </span><br></br>
                <input type="number" value={this.state.sale} onChange={event => this.updateInputValue("sale", event)}></input><br></br>
                </li>
                <button onClick = {event=>this.submit(event)}>Submit</button>
            </div>
        )
    }
    updateInputValue(parameter, event){
        // get the value of the element that caused this event
        // and set state to that value
        this.setState({
            [parameter]: event.target.value
        }, () =>{
            this.submit();
        })
    }

    submit(event){
        let name = this.state.name;
        let description = this.state.description;
        let age = this.state.age;
        let gender = this.state.gender;
        let temperament = this.state.temperament;
        let fee = this.state.fee;
        let type = this.state.type;
        let breed = this.state.breed;
        let gets_along = this.state.gets_along;
        let url = this.state.url;
        let sale = this.state.sale;
        fetch("https://animalrescueproject.azurewebsites.net/add", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(
                {
                "name":name,
                "description": description,
                "age": age,
                "gender": gender,
                "date_added": "{{currentdate}}",
                "temperament": temperament,
                "fee": fee,
                "type": type,
                "breed": breed,
                "gets_along": gets_along,
                "url": url,
                "sale": sale
            })
        });
    }


}