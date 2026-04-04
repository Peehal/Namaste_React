import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            userInfo:{
                name:"Dummy",
                location:"Ranchi", 
                avatar_url
: 
"https://avatars.githubusercontent.com/u/171475807?v=4"
            }
        }
        console.log(this.props.name+"Child Constructor")
    }

    async componentDidMount(){
        console.log(this.props.name+" Component did Mount")

        const data =await fetch("https://api.github.com/users/peehal");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo:json
        })  

    }

    componentDidUpdate(){
        console.log(this.props.name+"Component did update")
    }
 
    componentWillUnmount(){
         console.log(this.props.name+"Component unmounted")
    }

    render(){

    const {name, location, avatar_url} = this.state.userInfo;
    console.log(this.props.name+"Child Render")

        return(
            <div className="user-card">
            <h2>Name - {name}</h2>
            <p>Location - {location}</p>
            <img src={avatar_url} alt="user" width="150" />
        </div>
        )
    }
}

export default UserClass; 