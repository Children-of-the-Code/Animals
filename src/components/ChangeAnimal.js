import * as React from 'react';

export class ChangeAnimal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            type:"",
            breed:"",
            age:0,
            temperament:"",
            gets_along:"",
            fee:"",
            sale:0,
            url:"",
            description:"",
            currentAnimal:[],
            msg:""
        }
    }
    componentDidUpdate(){
        this.updateList();
    }

    componentDidMount(){
        this.updateList();
        this.setState({
            msg:""
        })
    }
    updateList(){
        if (this.props.currentanimalid){
            fetch("https://animalrescueproject.azurewebsites.net/animals/findbyid/"+this.props.currentanimalid)
            .then(response=>response.json())
            .then(animal=>{this.setState({currentAnimal:animal}, console.log())})
        }
    }
    handleSale(e){
        e.preventDefault();
        let sale;
        if(this.state.sale){
            sale=this.state.sale;
        }else{
            sale=this.props.currentAnimal.sale;
        }
        fetch("https://animalrescueproject.azurewebsites.net/animals/sale/"+this.props.currentanimalid, {
                method: "POST",
                mode: "cors",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "sale": sale
                })
            })

    }


    handleSubmit(e){
        e.preventDefault();
        let description;
        let url;
        let sale;
        let name;
        let age;
        let gender;
        let temperament;
        let type;
        let fee;
        let breed;
        let gets_along;
        if (this.state.description){
            description=this.state.description;
        }else{
            description=this.state.currentAnimal.description;
        }
        if (this.state.url){
            url=this.state.url;
        }else{
            url=this.state.currentAnimal.url;
        }
        if(this.state.name){
            name=this.state.name;
        }else{
            name=this.state.currentAnimal.name;
        }
        if(this.state.age){
            age=this.state.age;
        }else{
            age=this.state.currentAnimal.age;
        }
        if(this.state.gender){
            gender=this.state.gender;
        }else{
            gender=this.state.currentAnimal.gender
        }
        if(this.state.temperament){
            temperament=this.state.temperament;
        }
        else{
            temperament=this.state.currentAnimal.temperament;
        }
        if(this.state.type){
            type=this.state.type;
        }
        else{
            type=this.state.currentAnimal.type;
        }
        if(this.state.fee){
            fee=this.state.fee;
        }
        else{
            fee=this.state.currentAnimal.fee
        }
        if(this.state.breed){
            breed=this.state.breed;
        }
        else{
            breed=this.state.currentAnimal.breed
        }
        if(this.state.gets_along){
            gets_along=this.state.gets_along;
        }
        else{
            gets_along=this.state.currentAnimal.gets_along;
        }
        
        fetch("https://animalrescueproject.azurewebsites.net/animals/changeanimal", {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "animal_id": this.props.currentanimalid,
                "name": name,
                "description": description,
                "age": age,
                "gender": gender,
                "date_added": this.state.currentAnimal.date_added,
                "temperament": temperament,
                "fee": fee,
                "type": type,
                "breed": breed,
                "gets_along": gets_along,
                "url": url,

            })
        }).then(this.setState({
            msg:"The animal has been updated!"
        }))

        
    }
    handleChange(fieldName, event){
        this.setState({
            [fieldName]:event.target.value
        }, console.log()
        );
        
    }

    render(){
        return(
            <div>
                {this.props.currentanimalid&&
                    <div className="contentcard">
                
                    <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                        
                        
                        <h5>Values to Change:</h5>
                        <ol>
                            <li><label name="name">Name: </label><input type="text" onChange={event=>this.handleChange("name",event)} placeholder={this.state.currentAnimal.name}></input></li>
                            <li><label name="Type">Type: </label>
                                <select name="Type" onChange={event=>this.handleChange("type",event)} >
                                    <option value="">{this.state.currentAnimal.type}</option>
                                    <option value="Cat">Cat</option>
                                    <option value="Dog">Dog</option>
                                </select>
                            </li>
                            <li><label name="Breed">Breed: </label>
                                <select name="Breed" onChange={event=>this.handleChange("breed",event)} >
                                    <option value="">{this.state.currentAnimal.breed}</option>
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
                            <li><label name="age">Age: </label><input type="number" onChange={event=>this.handleChange("age",event)} placeholder={this.state.currentAnimal.age}></input></li>
                            <li><label name="Gender">Gender: </label>
                                    <select name="Gender" onChange={event=>this.handleChange("gender",event)}>
                                        <option value="">{this.state.currentAnimal.gender}</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                            </li>
                            <li>
                                <label name="Temperament">Temperament:"</label>
                                    <select name="Temperament" onChange={event=>this.handleChange("temperament",event)}>
                                        <option value="">{this.state.currentAnimal.temperament}</option>
                                        <option value="Mild">Mild</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hot">Hot</option>
                                        <option value="Spicy">Spicy</option>
                                    </select>
                            </li>
                            <li>
                                <label name="Gets_along">Gets Along With: </label>
                                    <select name="Gets_along" onChange={event=>this.handleChange("gets_along",event)} >
                                        <option value="">{this.state.currentAnimal.gets_along}</option>
                                        <option value="Dogs">Dogs</option>
                                        <option value="Cats">Cats</option>
                                        <option value="Kids">Kids</option>
                                        <option value="AllAnimals">All Animals</option>
                                        <option value="AllAnimalKids">All Animals And Kids</option>
                                        <option value="None">None</option>
                                    </select>
                            </li>
                            <li>
                                <label name="Fee">Fee: </label><input type="number" onChange={event=>this.handleChange("fee", event)} placeholder={this.state.currentAnimal.fee}></input>
                            </li>
                            
                            <li>
                                <label name="url">Url: </label><input type="text" onChange={event=>this.handleChange("url", event)} placeholder={this.state.currentAnimal.url}></input>
                            </li>
                            <li>
                                <label name="description">Description: </label><textarea type="text" onChange={event=>this.handleChange("description", event)}placeholder={this.state.currentAnimal.description}></textarea>
                            </li>
                        </ol>
                        <button type="submit">Update Animal</button>
                    </form>
                    <p>{this.state.msg}</p>
                    <form onSubmit={event=>{this.handleSale(event)}}>
                        <ol>
                    <li>
                                <label name="Sale">Sale: </label><input type="number" onChange={event=>this.handleChange("sale", event)} placeholder={this.state.currentAnimal.sale}></input>
                            </li>
                            </ol>
                            <button type="submit">Update Sale Percentage</button>
                    </form>
                </div>
                
                
                
                }
            </div>
            
        )
    }

}