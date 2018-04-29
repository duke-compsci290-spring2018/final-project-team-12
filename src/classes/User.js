export default class User {
    constructor(profile){
        this.email = profile.getEmail();
        this.name = profile.getName();
        this.avatar = profile.getImageUrl();
        this.admin = false;
        this.banned = false;
        this.color = "light";
    }
}