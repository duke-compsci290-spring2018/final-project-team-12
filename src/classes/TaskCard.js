import Confirmation from "./Confirmation.js";

export default class TaskCard {
    constructor(name, description, points, confirmationMethods, due){
        this.name = name;
        this.description = description;
        this.points = points;
        this.confirmationMethods = confirmationMethods;
        this.due = due;

        this.confirmation = new Confirmation();
        this.votes = 0;

        this.claimer = null;
        this.dateClaimed = null;

        this.yesVotes = [];
        this.noVotes = [];
        this.yesConfirm =[];
        this.noConfirm=[];

        this.approved = false;
        this.claimed = false;
        this.confirmed = false;
    }
}