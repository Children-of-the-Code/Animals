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
            currentuser:[]
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
        this.handleLogin(true);
        this.handleId(user.user_id);
        this.handleRole(user.role);
        this.setState({
            loggedin:true
        }) 
    }


    render(){
        return(
            <div>
                <h2>Login</h2>
                <div>
                    {this.state.loggedin==false&&
                    <div>
                        <form onSubmit={this.handleSubmit}>
                    <p>Username: <input name="username" type="text" onChange={event=>{this.capcredentials(event, "username")}}></input></p>
                    <p>Password: <input name="password" type="text" onChange={event=>{this.capcredentials(event, "password")}}></input></p>
                    <button type="submit" className="login" >Login</button>
                    </form>
                    </div>
                    }
                    {this.state.loggedin==true&&
                        <div><p>You are logged in</p></div>
                    }
                </div>
            </div>
        )
    }
}