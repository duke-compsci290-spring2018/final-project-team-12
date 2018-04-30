<template>
    <v-container fluid grid-list-lg>
        <v-layout row justify-center>
                <task-create :cardsRef="cardsRef" :user="user"></task-create>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <proposal-group :cards="cards" :cardsRef="cardsRef" :usersRef="usersRef" :user="user"></proposal-group>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import ProposalGroup from "./ProposalGroup.vue";
    import RightDrawer from "./RightDrawer.vue";
    import FooterNav from "./FooterNav.vue";
    import TaskCreate from "./TaskCreate.vue";

    export default {
        name: "proposal-board",
        components: {
            RightDrawer,
            FooterNav,
            ProposalGroup,
            TaskCreate
        },
        data () {
            return {
                createTask: false,
                cardsRef: this.db.ref('cards'),
                usersRef: this.db.ref('users')
            }
        },
        props: [
            'db',
            'cards',
            'storageRef',
            'user',
            'relay'
        ],
        methods: {
            showTaskCreate: function () {
                this.createTask=true;
            }
        }
    }
</script>

<style scoped>

</style>