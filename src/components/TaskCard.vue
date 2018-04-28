<template>
    <v-card dark>
        <v-container>
            <v-layout row>
                <v-flex xs7>
                    <v-card height="100%" tile flat dark>
                        <span class="title">Some name</span>
                        <v-card-text class="points">
                            80 pts
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs5>
                    <v-card height="100%" flat tile light>
                        <v-toolbar dense flat color="transparent">
                            <v-spacer>

                            </v-spacer>
                            <v-chip disabled outline small>
                                08-02-2012
                            </v-chip>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon color="grey darken-3">
                                    zoom_out_map
                                </v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <p class="description">
                                asdfasdf hello dog shit cock ass mtoherfucker
                            </p>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "task-card",
        props: ["cardJson"],
        data() {
            return {}
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
    }

    .title {
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 5vw;
    }

    .points {
        text-align: center;
        margin: auto;
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 5vw;
    }
</style>