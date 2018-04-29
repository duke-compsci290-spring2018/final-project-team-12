<template>
    <v-dialog max-width="60vw" v-model="open">
        <v-btn class="newTask" large block light
               slot="activator"
               @click="reset()"
               color="grey lighten-2">
            Propose a New Task
        </v-btn>
        <v-card light>
            <v-toolbar light flat color="grey lighten-3">
                <v-toolbar-title>
                    Create a Task
                </v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-container fluid grid-list-lg>
                <v-text-field light
                              name="card-name-input"
                              label="Task Name"
                              v-model="currTaskName"
                ></v-text-field>
                <v-text-field light
                              name="card-name-input"
                              label="Descripton"
                              textarea
                              v-model="currTaskDescription"
                ></v-text-field>
                <v-toolbar flat dense color="grey darken-5">
                    <v-toolbar-title>Point value</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-slider :max="100" step="1" v-model="points">
                    </v-slider>
                    <span class="smol">{{this.points}}</span>
                </v-toolbar>
                <v-toolbar flat dense color="grey darken-5">
                    <v-toolbar-title>Due by</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <span class="smol">{{this.due}}</span>
                    <v-menu offset-x left top allow-overflow full-width>
                        <v-btn slot="activator" icon>
                            <v-icon>date_range</v-icon>
                        </v-btn>
                        <v-flex xs12 sm6>
                            <v-date-picker color="red darken-1" v-model="due"></v-date-picker>
                        </v-flex>
                    </v-menu>
                </v-toolbar>
                <v-toolbar flat dense color="grey darken-5">
                    <v-toolbar-title>Choose confirmations methods:</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <map-create v-if="location==null" v-on:get_location="location=loc; $forceUpdate()"></map-create>
                    <v-btn v-if="location!=null" @click="location=null" icon color="success">
                        <v-icon color="white">
                            my_location
                        </v-icon>
                    </v-btn>
                    <v-btn v-if="!image"
                           @click="image=!image; $forceUpdate()"
                           depressed
                           fab
                           small
                           color="grey lighten-3">
                        <v-icon color="grey">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                    <v-btn v-if="image"
                           @click="image=!image; $forceUpdate()"
                           fab
                           small
                           color="success">
                        <v-icon color="white">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                    <v-btn v-if="!text"
                           @click="text=true; $forceUpdate()"
                           depressed
                           fab
                           small
                           color="grey lighten-3">
                        <v-icon color="grey">
                            comment
                        </v-icon>
                    </v-btn>
                    <v-btn v-if="text"
                           @click="text=!text; $forceUpdate()"
                           fab
                           small
                           color="success">
                        <v-icon color="white">
                            comment
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-container>
            <v-toolbar color="grey lighten-3">
                <v-spacer></v-spacer>
                <v-btn @click="createCard()" large icon color="red">
                    <v-icon color="white">
                        check
                    </v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
    </v-dialog>
</template>

<script>

    import Map1 from './Map1.vue';
    // import TaskCard from '../TaskCard.js';
    // import ConfirmationMethods from '../ConfirmationMethods.js';

    import MapCreate from "./MapCreate.vue";

    class ConfirmationMethods {
        constructor(location, image, text){
            this.location = location;
            this.image = image;
            this.text = text;
        }
    }

    class Confirmation {
        constructor(){
            this.location = false;
            this.image = false;
            this.text = false;
        }
    }

    class TaskCard {

        constructor(name, description, points, confirmationMethods, due){
            this.name = name;
            this.description = description;
            this.points = points;
            this.confirmationMethods = confirmationMethods;
            this.due = due;

            this.confirmation = new Confirmation();
            this.votes = 0;
            this.claimed = false;
            this.claimer = null;
            this.dateClaimed = null;
            this.users = [];
        }
    }


    export default {
        name: "task-create",
        components: {
            MapCreate
        },
        props: ["user", "cardsRef"],
        data() {
            return {
                points: 0,
                currTaskName: "",
                currTaskDescription: "",
                due: "",
                cardJson: null,
                location: false,
                image: false,
                text: false,

                open: false
            }
        },
        methods: {
            createCard() {

                console.log("wadda afwep8;j");
                var cm = new ConfirmationMethods(this.location, this.image, this.text);
                console.log("fuck me");
                var card = new TaskCard(this.currTaskName, this.currTaskDescription, this.points, cm, this.due);
                console.log("hey " + this.cardsRef);
                this.cardsRef.push(card);
                this.open = false;
            },
            reset() {
                this.points = 0;
                this.currTaskName = "";
                this.currTaskDescription = "";
                this.cardJson = null;
                this.location = null;
                this.image = false;
                this.text = false;
                this.due = "";
            }
        }
    }
</script>

<style scoped>
    .newTask {
        text-transform: capitalize;
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
    }

    .smol {
        text-transform: capitalize;
        font-family: 'Quicksand', sans-serif;
        font-size: 20px;
    }
</style>