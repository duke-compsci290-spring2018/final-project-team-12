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
                        <v-card-actions>
                            <v-layout justify-center row>
                                <v-flex xs6>
                                    <v-btn @click="" block medium color="green darken-2">

                                        <v-icon dark>done</v-icon>
                                    </v-btn>
                                </v-flex>

                                <v-flex xs6>
                                    <v-btn @click="" block medium color="red darken-2">

                                        <v-icon dark>block</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs5>
                    <v-toolbar dense color="white">
                        <v-spacer></v-spacer>
                        <v-chip disabled outline small>
                            {{cardJson.due}}
                        </v-chip>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card flat height="100%" tile light>
                        <v-card-text class="description">
                            {{cardJson.description}}
                        </v-card-text>
                        <v-toolbar flat dense color="grey lighten-3">
                            <v-spacer></v-spacer>
                            <v-icon v-if="cardJson.confirmationMethods.location!=null && cardJson.confirmationMethods.location!=false" small color="grey darken-2">
                                my_location
                            </v-icon>
                            <v-spacer></v-spacer>
                            <v-icon v-if="cardJson.confirmationMethods.image!=null && cardJson.confirmationMethods.image!=false" small color="grey darken-2">
                                add_a_photo
                            </v-icon>
                            <v-spacer></v-spacer>
                            <v-icon v-if="cardJson.confirmationMethods.text!=null && cardJson.confirmationMethods.text!=false" small color="grey darken-2">
                                comment
                            </v-icon>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "proposal-card",
        props: ["cardJson"],
        data() {
            return {
                cards: []
            }
        },
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