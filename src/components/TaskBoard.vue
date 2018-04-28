<template>
    <v-container>
        <right-drawer></right-drawer>
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <task-group></task-group>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <task-group></task-group>
                </v-flex>
            </v-layout>
        </v-container>
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
            'user'
        ],
    }
</script>

<style scoped>
</style>