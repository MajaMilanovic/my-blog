import { Post } from "../entities/Post";
import { url } from '../shared/constants';

class ServicePost {
    fetchPosts = () => {
        return fetch(url.postsURL)
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => {
                    return new Post(post);
                });
            });
    }
    fetchPost = id => {
        return fetch(`${url.postsURL}/${id}`)
            .then(response => response.json())
            .then(post => new Post(post))
    }

    setNewPost = comment => {
        fetch(url.postsURL, {
            method: "POST",
            body: JSON.stringify(comment),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                return response.json()
            })
            .then(responseData => {
            })
            .catch(error => {
                alert(error)
            })
    }



}

export const servicePost = new ServicePost()