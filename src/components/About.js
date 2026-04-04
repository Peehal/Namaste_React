import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>Hello everyone</h2>

            <User name ={"Peehal Sinha (functional based)"} />
            <UserClass name ={"Peehal Sinha(Class baaed component)"} Age={"22"} />
        </div>
    )
}

export default About;