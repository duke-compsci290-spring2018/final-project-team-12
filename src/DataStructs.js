class User {
    constructor(profile){
        this.email = profile.getEmail();
        this.name = profile.getName();
        this.avatar = profile.getImageUrl();
        this.admin = false;
    }
}

class TaskCard {
    constructor(name, description, points, confirmationMethods, due){
        name = name;
        description = description;
        points = points;
        confirmationMethods = confirmationMethods;
        due = due;

        confirmation = new Confirmation();
        votes = 0;
        claimed = false;
        claimer = null;
        dateClaimed = null;
        users = [];
    }
}

class ConfirmationMethods {
    constructor(location, image, text){
        this.location = location;
        this.image = image;
        this.text = text;
    }
}

class Confirmation {
    constructor(){
        this.location = null;
        this.image = null;
        this.text = null;
    }
}

class Location {
    constructor(x, y, radius, place){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.place = place;
    }
}

class Relay {

}

module.exports = User, TaskCard, Location, Confirmation, ConfirmationMethods;