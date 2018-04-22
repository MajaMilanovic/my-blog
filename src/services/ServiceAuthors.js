import { Author } from "../entities/Author"
import { url } from "../shared/constants"
import { getNumberOfItemsFromArray } from "../shared/utils"

class ServiceAuthor {
    fetchAuthors(){
        return fetch(url.authorsURL)
        .then((response)=> response.json())
        .then((responseAuthors)=>{
           const myAuthors=  getNumberOfItemsFromArray(responseAuthors,8);
           return myAuthors.map((author)=>{
               return new Author (author)
           })
        })
        .catch((error)=>{throw(error)})
    }
}

export const serviceAuthor = new ServiceAuthor()
