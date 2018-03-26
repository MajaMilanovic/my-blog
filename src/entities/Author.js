class Author {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.username = user.username;
        this.email = user.email;
        this.streetAddress = user.address.street;
        this.cityAddress = user.address.city;
        this.zipcodeAddress = user.address.zipcode;
        this.addressGeoLat = user.address.geo.lat;
        this.addressGeoLng = user.address.geo.lng;
        this.phone = user.phone;
        this.companyName = user.company.name;
        this.companySlogan = user.company.catchPhrase;
    }
}

export { Author };