import React from "react"

function User ( {details} ) {
    if (!details) {
        return <h4>loading data..</h4>
    }
    return (
        <div className="user-details">
            <h2> { details.name } </h2>
            <p> email: { details.email } </p>
        </div>
    )
}

export default User;