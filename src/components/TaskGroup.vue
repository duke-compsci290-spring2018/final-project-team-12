<!--Component representing main dashboard/work board for -->
<!-- should take userID, vuefire reference, and filter cards based off of id-->
<template>
    <v-card
            class="taskGroup"
            dark
            flat
            color="transparent"
    >
        <v-toolbar light flat transparent>
            <v-toolbar-title>
                Some User's Tasks
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon>
                    <v-icon>

                    </v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card light flat color="transparent">
            <v-container grid-list-lg fluid>
                <v-layout class="cardList" row>
                    <v-flex xs5>
                        <task-card></task-card>
                    </v-flex>
                    <v-flex width="600px">
                        <task-card></task-card>
                    </v-flex>
                    <v-flex>
                        <task-card></task-card>
                    </v-flex>
                    <v-flex>
                        <task-card></task-card>
                    </v-flex>
                    <v-flex>
                        <task-card></task-card>
                    </v-flex>
                    <v-flex>
                        <task-card></task-card>
                    </v-flex>
                    <v-flex>
                        <task-card></task-card>
                    </v-flex>

                </v-layout>
            </v-container>
        </v-card>
    </v-card>
</template>

<script>
    import TaskCard from "./TaskCard.vue";

    export default {
        components: {
            TaskCard
        },
        props: ['user', 'cards'],
        methods: {
            filterCards() {
                if (this.user == null) {
                    return this.cards;
                } else {
                    // return this.cards.filter(card => card.users
                }
            }
        }
    }


</script>

<style scoped>
    .taskGroup {
        max-height: 70vh;
        background-color: rgba(0,0,0,0);
    }

    .cardList {
        overflow-x: scroll;
        overflow-y: hidden;
    }
</style>