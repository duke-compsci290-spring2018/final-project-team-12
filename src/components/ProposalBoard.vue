<template>
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                <v-btn class="newTask" large block light color="grey lighten-2">
                    Propose a New Task
                </v-btn>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <proposal-group :user="user"></proposal-group>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
     import ProposalGroup from "./ProposalGroup.vue";
    import RightDrawer from "./RightDrawer.vue";
    import FooterNav from "./FooterNav.vue";

    export default {
        name: "task-board",
        components: {
            RightDrawer,
            FooterNav,
            ProposalGroup
        },
        data: {
            return() {
                user = this.user
            }
        },
        props: [
            'db',
            'storageRef',
            'user',
            'relay'
        ],
        methods: {}
    }
</script>

<style scoped>
    .newTask{
        
    }
</style>