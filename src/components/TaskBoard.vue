<template>
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <task-group></task-group>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex lg6 md6 xs12>
                    <task-group></task-group>
                </v-flex>
                <v-flex lg6 md6 xs12>
                    <task-group></task-group>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
    import TaskGroup from "./TaskGroup.vue";
    export default {
        name: "task-board",
        components:{
            TaskGroup
        }
    }
</script>

<style scoped>
</style>