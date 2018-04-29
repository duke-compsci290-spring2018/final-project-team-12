<template>
    <v-container fluid grid-list-lg>
        <v-layout row justify-center>
                <task-create></task-create>
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
    import TaskCreate from "./TaskCreate.vue";

    export default {
        name: "proposal-board",
        components: {
            RightDrawer,
            FooterNav,
            ProposalGroup,
            TaskCreate
        },
        data: {
            return() {
                createTask: false
            }
        },
        props: [
            'db',
            'storageRef',
            'user',
            'relay'
        ],
        methods: {
            showTaskCreate: function () {
                this.createTask=true;
            },
            createTask: function() {
                return this.createTask;
            }
        }
    }
</script>

<style scoped>

</style>