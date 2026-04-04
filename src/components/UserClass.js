import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

    const {name, Age} = this.props;

        return(
             <div className="user-card">
            <h2>Name - {name}</h2>
            <p>Age - {Age}</p>
            <p>Technical Skills known</p>
        </div>
        )
    }
}

export default UserClass; 