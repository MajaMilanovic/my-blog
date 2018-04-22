import React from "react"

const AuthorCard = (props) => {
    const {data}=props
    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/100/nature/" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>{data.name}</h3>
                        <p>username: {data.username}</p>
                        <p>email: {data.email}</p>
                        <p>phone: {data.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AuthorCard }