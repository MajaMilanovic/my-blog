import React from "react"
import { BackToPosts } from "../partials/BackToPosts";
import { Link } from "react-router-dom"

const SinglePostPage = () => {
    return (
        <div>
            <BackToPosts />
            <h1 className="center-align"> Post title </h1>
            <Link to="/authors/:id">Author name</Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, sint non, sapiente saepe doloribus hic expedita consequuntur
                a voluptatem in magni dolorem esse dolores. Commodi mollitia eos tenetur quia? Qui!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati, sint non, sapiente saepe doloribus hic expedita consequuntur
                     a voluptatem in magni dolorem esse dolores. Commodi mollitia eos tenetur quia? Qui!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati, sint non, sapiente saepe doloribus hic expedita consequuntur
                     a voluptatem in magni dolorem esse dolores. Commodi mollitia eos tenetur quia? Qui!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati, sint non, sapiente saepe doloribus hic expedita consequuntur
                     a voluptatem in magni dolorem esse dolores. Commodi mollitia eos tenetur quia? Qui!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Obcaecati, sint non, sapiente saepe doloribus hic expedita consequuntur
                     a voluptatem in magni dolorem esse dolores. Commodi mollitia eos tenetur quia? Qui!</p>
                    <hr/>
                    <h3>3 more posts from same author</h3>
                    <ul>
                        <li><Link to="/post/:id">Post #id</Link></li>
                    </ul>
        </div>
    )
}

export { SinglePostPage }