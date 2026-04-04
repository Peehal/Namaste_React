import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count0 : 0,
            count2 : 2,
        }

        console.log("Child Constructor")
    }

    componentDidMount(){
        console.log("Child Component did Mount")
    }

    render(){

    const {name, Age} = this.props;
    const {count0, count2} = this.state;

    console.log("Child Render")

        return(
             <div className="user-card">
            <h2>Name - {name}</h2>
            <p>Age - {Age}</p>


            <p>count0 -{count0} </p>
            <button onClick={() => {
                this.setState ({
                    count0 : this.state.count0 + 1,
                })
            }}>
                Count Increment
            </button>


            <p>count2 -{count2} </p>
            <p>Technical Skills known</p>
        </div>
        )
    }
}

export default UserClass; 