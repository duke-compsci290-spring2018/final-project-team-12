<!--Component representing main dashboard/work board for -->
<!-- should take userID, vuefire reference, and filter cards based off of id-->
<template>
    <v-card
            class="taskGroup"
            dark
            flat
            color="transparent"
    >
        <v-toolbar dark>
            <v-spacer></v-spacer>
            <v-toolbar-title class="grouptitle">
                Tasks to Complete
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card light flat tile>
            <v-container grid-list-lg fluid>
                <v-layout class="cardList" row>
                    <v-flex xs5 v-for="card in filterCards()">
                        <task-card
                                :cardJson="card"
                                :user="user"
                                :cardsRef="cardsRef"
                                :usersRef="usersRef"
                                :storageRef="storageRef"
                                :db="db"
                        ></task-card>
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
        props: ['user', 'cards', 'cardsRef', 'usersRef', 'storageRef','db'],
        methods: {
            filterCards() {
                return this.cards.filter(card => card.approved && !card.confirmed && !card.claimed);
            }
        }
    }


</script>

<style scoped>
    .taskGroup {
        max-height: 70vh;
        background-color: rgba(0,0,0,0);
    }

    .grouptitle {
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
    }

    .cardList {
        overflow-x: scroll;
        overflow-y: hidden;
    }
</style>