import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount() {

    }

    render() {

        // console.log("Parent Render")

        return (
            <div>
                <h1>About</h1>
                <h2>Hello everyone</h2>
                <div className="font-bold">
                    <UserContext.Consumer >
                        {({ loggedInUser }) => {
                           return <p>{loggedInUser}</p>
                        }}
                    </UserContext.Consumer>
                </div>
                <User />
                <UserClass name={"first"} Age={"22"} />

            </div>
        )
    }
}

// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>Hello everyone</h2>

//             <User name ={"Peehal Sinha (functional based)"} />
//             <UserClass name ={"Peehal Sinha(Class baaed component)"} Age={"22"} />
//         </div>
//     )
// }

export default About;