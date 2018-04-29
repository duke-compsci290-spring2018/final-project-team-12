<template>
    <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <task-group :user="user"></task-group>
                </v-flex>
            </v-layout>
            <v-footer>

            </v-footer>
    </v-container>
</template>

<script>
    import TaskGroup from "./TaskGroup.vue";
    import RightDrawer from "./RightDrawer.vue";

    export default {
        name: "task-board",
        components: {
            TaskGroup,
            RightDrawer
        },
        props: [
            'db',
            'storageRef',
            'user',
            'relay'
        ],
        methods: {
        }
    }
</script>

<style scoped>
</style>