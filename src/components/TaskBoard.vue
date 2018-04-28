<template>
    <v-container fluid grid-list-md>
            <v-layout row>
                <v-flex xs11>
                    <task-group></task-group>
                </v-flex>
                <right-drawer></right-drawer>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs11>
                    <task-group></task-group>
                </v-flex>
            </v-layout>
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