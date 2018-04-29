import Confirmation from "./Confirmation.js";

export class TaskCard {
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

// module.exports = TaskCard;