<template>
    <v-card dark height="50vh" min-width="800px">
        <v-container height="50vh"fluid grid-list-md>
            <v-layout row>
                <v-flex xs12>
                    <v-card tile height="100%" flat dark>
                        <v-toolbar color="transparent" flat>
                            <v-toolbar-title class="name">Some name</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="points">
                            80 pts
                        </v-card-text>
                        <!--<v-btn large block light>
                            CLAIM
                        </v-btn>-->
                        <task-confirm :storageRef="this.storageRef" :db="this.db"></task-confirm>
                      
                    </v-card>
                </v-flex>
                <v-flex xs5>
                    <v-card flat height="100%" tile light>
                        <v-toolbar dense flat color="transparent">
                            <v-spacer>
                            </v-spacer>
                            <v-chip disabled outline small>
                                08-02-2012
                            </v-chip>
                            <v-spacer>
                            </v-spacer>
                        </v-toolbar>
                        <v-card-text class="description">
                            Lorem ipsum dolor sit amet, te pro veri aliquam complectitur, eos at zril mentitum recusabo, ei aperiri eruditi quaerendum cum.
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
               "storageRef",
               "db"],
        components:{
            TaskConfirm,
        
        },
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