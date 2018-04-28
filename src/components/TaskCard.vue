<template>
    <v-card dark>
        <v-container fluid grid-list-md>
            <v-layout row>
                <v-flex xs8>
                    <v-card height="100%" tile flat dark>
                        <v-toolbar color="transparent" flat>
                            <v-toolbar-title class="name">Some name</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="points">
                            80 pts
                        </v-card-text>
                        <v-btn large block light>
                            CLAIM
                        </v-btn>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card height="100%" flat tile light>
                        <v-toolbar dense flat color="transparent">
                            <v-spacer>

                            </v-spacer>
                            <v-chip disabled outline small>
                                08-02-2012
                            </v-chip>
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