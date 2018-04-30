<!--LUCAS Component representing main dashboard/work board for -->
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
                Vote on Proposed Tasks
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card light flat tile>
            <v-container grid-list-lg fluid>
                <v-layout class="cardList" row>
                    <v-flex xs5 v-for="card in filterCards()">
                        <proposal-card
                                :cardJson="card"
                                :user="user"
                                :cardsRef="cardsRef"
                                :usersRef="usersRef"
                        ></proposal-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-card>
</template>

<script>
    import ProposalCard from "./ProposalCard.vue";

    export default {
        components: {
            ProposalCard
        },
        props: ['user', 'cards', 'cardsRef', 'usersRef'],
        methods: {
            filterCards() {
                return this.cards.filter(card => !card.approved);
            }
        }
    }


</script>

<style scoped>
    .taskGroup {
        max-height: 30vh;
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