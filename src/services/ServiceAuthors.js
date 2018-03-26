import { Author } from "../entities/Author";
import { url } from '../shared/constants';
import { Post } from '../entities/Post';
class ServiceAuthors {
    fetchAuthors = () => {
        
        return fetch(url.authorsURL)
            .then(response => response.json())
            .then(authors => {
                return authors.map(author => new Author(author));
            });
    }
    fetchAuthor = (id) => {
        return fetch(`${url.authorsURL}${id}`)
            .then(response => response.json())
            .then(author => new Author(author));
    }
    fetchAuthorPosts = (id) => {
        return fetch(`${url.authorPostURL}${id}`)
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => new Post(post));
            });
    }
}

export const serviceAuthors = new ServiceAuthors()