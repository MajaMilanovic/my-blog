import React from "react"

const AddressCard = (props) => {
    const { address } = props

    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-stacked">
                    <div className="card-content">
                        <h3>Address</h3>
                        <p>street: {address.street}</p>
                        <p>city: {address.city}</p>
                        <p>zipcode: {address.zipcode}</p>
                    </div>
                </div>
                <div className="card-image">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11323.18958168295!2d20.4828928!3d44.805317499999994!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1521843663029" width={"150px"} height={"100px"} title="where-to-find-us"></iframe>
                </div>
            </div>
        </div>

    )
}

export { AddressCard }