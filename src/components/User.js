import { useState } from "react";

const User = ({name}) => {

    const [count0] = useState(0);
    const [count2] = useState(2);

    return(
        <div className="user-card">
            <h2>Name - {name}</h2>
            <p>Age</p>
            <p>count0 -{count0} </p>
            
            <p>count2-{count2} </p>
            <p>Technical Skills known</p>
        </div>
    )
}

export default User;

