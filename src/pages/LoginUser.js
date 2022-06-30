import * as React from 'react';


export class LoginUser extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin=this.handleLogin.bind(this);
        this.handleId=this.handleId.bind(this);
        this.handleRole=this.handleRole.bind(this);
        this.state={
            username:"",
            password:"",
            userid:"",
            userrole:"",
            loggedin:this.props.loggedin,
            currentuser:[],
            text:""
        }
    }

    capcredentials(event, cred){
        this.setState({
            [cred]:event.target.value
        });
    }
    componentDidMount(){
     console.log(this.state.loggedin);   
    }

    handleLogin(loggedin){
        this.props.handleLogin(loggedin);       
    }
    handleId(id){
        this.props.handleId(id);
    }
    handleRole(role){
        this.props.handleRole(role);
    }



    login(){
        fetch("https://animalrescueproject.azurewebsites.net/users/login", {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username":this.state.username,
                "password":this.state.password
            })
        })
        .then(response=>response.json())
        .then(user=>{this.setState({currentuser:user},()=>{this.updateuser(user)})})       
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.login()

    }
    updateuser(user){
        if(user.user_id>0){
            this.handleLogin(true);
            this.handleId(user.user_id);
            this.handleRole(user.role);
            this.setState({
                loggedin:true
            }) 
            this.componentDidMount();
        }   
        
        else{
            this.setState({
                text:"Please enter a correct username and password to contine"
            }, console.log(this.state.text))
        }
    }


    render(){
        return(
            <div>
                
                <div className='reg'>
                    {this.state.loggedin===false&&
                    <div>
                        
                        <form className="formstyle" onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                    <p>Username: <input className="reginput" name="username" type="text" onChange={event=>{this.capcredentials(event, "username")}}></input></p>
                    <p>Password: <input className="reginput" name="password" type="password" onChange={event=>{this.capcredentials(event, "password")}}></input></p>
                    <div className="center"><button type="submit" className="loginbutton" >Login</button></div>
                    <p>{this.state.text}</p>
                    </form>
                    </div>
                    }
                    {this.state.loggedin===true&&
                        <div><h2>You are logged in</h2></div>
                    }
                </div>
            </div>
        )
    }
}