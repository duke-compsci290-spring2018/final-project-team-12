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
                    <v-flex xs5>
                        <approval-card></approval-card>
                    </v-flex>
                    <v-flex width="600px">
                        <approval-card></approval-card>
                    </v-flex>
                    <v-flex>
                        <approval-card></approval-card>
                    </v-flex>
                    <v-flex>
                        <approval-card></approval-card>
                    </v-flex>
                    <v-flex>
                        <approval-card></approval-card>
                    </v-flex>
                    <v-flex>
                        <approval-card></approval-card>
                    </v-flex>
                    <v-flex>
                        <approval-card></approval-card>
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

    .grouptitle {
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
    }

    .cardList {
        overflow-x: scroll;
        overflow-y: hidden;
    }
</style>