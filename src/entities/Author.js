class Author {
    constructor() {
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.address = {
            street: user.address.street,
            city: user.address.city, 
            zipcode: user.address.zipcode 
        };
        this.company = {
            name: user.company.name,
            slogan: user.company.catchPhrase
        };
    }
}

export { Author };