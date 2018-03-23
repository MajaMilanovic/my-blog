import React from "react"
import { BackToAuthors } from "../partials/BackToAuthors";


const SingleAuthorPage = () => {
    return (
        <div>
            <BackToAuthors />
            <h1> Author </h1>
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-image">
                        <img src="https://lorempixel.com/100/100/nature/"/>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h3>Name Surname</h3>
                        <p>username: my_cool_username</p>
                        <p>email: my_cool@email.com</p>
                        <p>phone: 000-0000-00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-stacked">
                        <div class="card-content">
                        <h3>Address</h3>
                        <p>street: Cao Marko</p>
                        <p>city: Cao Nenade</p>
                        <p>zipcode: Cao Tamara</p>
                        </div>
                    </div>
                    <div class="card-image">
                        <img src="https://lorempixel.com/150/100/nature/"/>
                    </div>
                </div>
            </div>
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-stacked">
                        <div class="card-content">
                        <h3>Company</h3>
                        <p>name: BIT</p>
                        <p>slogan: samo nek radi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SingleAuthorPage }