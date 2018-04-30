<template>
    <v-card dark height="50vh" min-width="800px">
        <v-container height="50vh" fluid grid-list-md>
            <v-layout row>
                <v-flex xs12>
                    <v-card tile height="100%" flat dark>
                        <v-toolbar color="transparent" flat>
                            <v-toolbar-title class="name">{{cardJson.name}}</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="points">
                            {{cardJson.points}} pts
                        </v-card-text>
                        <v-layout justify-center>
                            <task-confirm :cardJson="cardJson" :storageRef="this.storageRef" :cardsRef="cardsRef"
                                          :db="this.db"></task-confirm>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex xs5>
                    <v-card flat height="100%" tile light>
                        <v-toolbar dense flat color="transparent">
                            <v-spacer>
                            </v-spacer>
                            <v-chip disabled outline small>
                                {{cardJson.due}}
                            </v-chip>
                            <v-spacer>
                            </v-spacer>
                        </v-toolbar>
                        <v-card-text class="description">
                            {{cardJson.description}}
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    import TaskConfirm from "./TaskConfirm.vue";

    export default {
        name: "task-card",
        props: ["cardJson",
            "user",
            "cardsRef",
            "usersRef",
            "storageRef",
            "db"],
        components: {
            TaskConfirm,
        },
        created(){
            console.log("ASDFASDFSDAF " + this.cardsRef);
        }
    }
</script>

<style scoped>
    .description {
        overflow-wrap: break-word;
        font-family: 'Quicksand', sans-serif;
        font-size: 1vw;
        height: 100%;
        width: 100%;
        text-overflow: ellipsis;
    }

    .name {
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 2vw;
    }

    .points {
        text-align: center;
        margin: auto;
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 4vw;
    }
</style>