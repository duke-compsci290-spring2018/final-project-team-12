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
                Approve Claimed Tasks
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-card light flat tile>
            <v-container grid-list-lg fluid>
                <v-layout class="cardList" row>
                    <v-flex xs5  v-for="card in filterCards()">
                        <approval-card
                                :cardJson="card"
                                :user="user"
                                :cardsRef="cardsRef"
                                v-on:proposal_yes="addYesVote(card)"
                                v-on:proposal_no="addNoVote(card)"
                                       ></approval-card>
                    </v-flex>
                    

                </v-layout>
            </v-container>
        </v-card>
    </v-card>
</template>

<script>
    import ApprovalCard from "./ApprovalCard.vue";

    export default {
        name:"approval-group",
        components: {
            ApprovalCard
        },
        props: ['user', 'cards','cardsRef'],
        methods: {
            filterCards() {
                return this.cards.filter(card => (!card.confirmed && card.claimed));
            },
            addYesVote(card){
                console.log("before " +  this.cardsRef.child(card['.key']).child('yesConfirm'));
                this.cardsRef.child(card['.key']).child('yesConfirm').push(this.user.email);

                console.log("after " + this.cardsRef.child(card['.key']).child('yesConfirm'));
            },
            addNoVote(card){
console.log("before " +  this.cardsRef.child(card['.key']).child('noConfirm'));
                this.cardsRef.child(card['.key']).child('noConfirm').push(this.user.email);

                console.log("after " + this.cardsRef.child(card['.key']).child('noConfirm'));
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