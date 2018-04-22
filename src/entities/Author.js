class Author {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.phone = user.phone;
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

export {
    Author
};