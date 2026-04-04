const User = ({name}) => {
    return(
        <div className="user-card">
            <h2>Name - {name}</h2>
            <p>Age</p>
            <p>Technical Skills known</p>
        </div>
    )
}

export default User;