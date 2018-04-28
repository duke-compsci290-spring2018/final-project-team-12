class User {
    constructor(profile){
        this.email = profile.getEmail();
        this.name = profile.getName();
        this.avatar = profile.getImageUrl();
    }
}

class TaskCard {
    constructor(){

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

module.exports = User, TaskCard, Location;