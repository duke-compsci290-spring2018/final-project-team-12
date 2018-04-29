<template>
    <v-dialog max-width="60vw">
        <v-btn class="newTask" large block light
               slot="activator"
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
                <v-toolbar dense color="grey darken-5">
                    <v-toolbar-title>Choose confirmations methods: </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <map-create></map-create>
                    <v-btn  v-if="!image"
                            @click="image=true;"
                            depressed
                            fab
                            small
                            color="grey lighten-3">
                        <v-icon color="grey">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                    <v-btn v-if="!text"
                           @click="text=true;"
                           depressed
                           fab
                           small
                           color="grey lighten-3">
                        <v-icon color="grey">
                            comment
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-container>
            <v-toolbar color="grey lighten-3">
                <v-spacer></v-spacer>
                <v-btn large icon color="red">
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
    import TaskCard from '../DataStructs';

    import MapCreate from "./MapCreate.vue";
    export default {
        name: "task-create",
        components: {
            MapCreate
        },
        props:[],
        data: {
            return() {
                cardJson = null;
                location = null;
                image = false;
                text = false;
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .newTask {
        text-transform: capitalize;
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
    }
</style>