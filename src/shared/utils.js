const getNumberOfItemsFromArray = (array, num) => {
    let limit = (array.length <= num) ? array.length : num;
    let newArray = [];
    for (let i = 0; i < limit; i++) {
        let element = array[i];
        newArray.push(element)
    }
    return newArray;
}

const capitalizeFirstLetter = (text) => {
    return ` ${(text[0]).toUpperCase()}${text.slice(1)}`
}

const makeFetch = (url, param, state) => { /// function for fetching???
    return fetch(url + param)
        .then((response) => {
            response.json()
        })
        .then((data) => {
            this.setState({
                state: data
            })
        })
        .catch((error) => alert(error))
}


const generateRandomNumber = (num) => {
    return parseInt(Math.random() * num)
}

export {
    getNumberOfItemsFromArray,
    capitalizeFirstLetter,
    makeFetch,
    generateRandomNumber
}