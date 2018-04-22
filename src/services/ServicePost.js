import { Post } from "../entities/Post"
import { url } from "../shared/constants"
import { getNumberOfItemsFromArray } from "../shared/utils"


class ServicePost {
    fetchPosts = () => {
        return fetch(url.postsURL)
            .then((response) => response.json())
            .then((responsePosts) => {
                const myPosts = getNumberOfItemsFromArray(responsePosts, 20)
                return myPosts.map((post) => {
                    return new Post(post)
                })
            })
            .catch((error) => { throw (error) })

    }
}

export const servicePost = new ServicePost()