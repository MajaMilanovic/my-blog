import {
    Post
} from "../entities/Post";
import {
    postsURL
} from "../shared/constants";

class PostService {
    fetchPosts = () => {
        const api = `${postsURL}`;
        return fetch(api)
            .then(response => response.json())
            .then(result => result.map(post => {
                return new Post(post)
            }))
            .catch(error => {
                throw new Error("Sorry,error happened!")
            })
    }
    fetchPost = (id) => {
        const api = `${postsURL}/${id}`;
        return fetch(api)
            .then(response => response.json())
            .then(post => post)
            .catch(error => {
                throw new Error("Sorry,error happened!")
            })
    }

    fetchPostComments = (id) => {
        const api = `${postsURL}/${id}/comments`;
        return fetch(api)
            .then(response => response.json())
            .then(commentList => commentList)
            .catch(error => {
                throw new Error("Sorry,error happened!")
            })
    }

    sendPost = (title, body, userId) => {
        const api = postsURL;
        return fetch(api, {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .catch(error => {
                throw new Error("Sorry,error happened!")
            })
    }
    removePost = (id) => {
        const api = postsURL;
        return fetch(`${api}/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .catch(error => {
                throw new Error("Sorry,error happened!")
            })
    }
    sendComment = (postId, id, name, email, body) => {
        const api = `${postsURL}/${postId}/comments`;
        return fetch(api, {
                method: 'POST',
                body: JSON.stringify({
                    postId,
                    id,
                    name,
                    email,
                    body
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .catch(error => {
                throw new Error("Sorry,error happened!")
            })
    }

}
export const postService = new PostService();