<template>
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <approval-group :cards="cards" :cardsRef="cardsRef" :user="user" :usersRef="usersRef"></approval-group>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
     import ApprovalGroup from "./ApprovalGroup.vue";
    import RightDrawer from "./RightDrawer.vue";
    import FooterNav from "./FooterNav.vue";

    export default {
        name: "approval-board",
        components: {
            RightDrawer,
            FooterNav,
            ApprovalGroup
        },
        data(){
            return {
                cardsRef: this.db.ref('cards'),
                usersRef: this.db.ref('users')
            }
        },
        props: [
            'db',
            'storageRef',
            'user',
            'relay',
            'cards'
        ],
        methods: {}
    }
</script>

<style scoped>
</style>