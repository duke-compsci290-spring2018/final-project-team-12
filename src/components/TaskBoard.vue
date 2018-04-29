<template>
    <v-container fluid grid-list-lg>
        <v-layout row justify-center>
            <v-flex xs5>
                <v-card light>
                    <v-toolbar dense flat>
                        <v-spacer></v-spacer>
                        <v-toolbar-title class="subDashTitle">
                            Time Left in this Relay
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-layout row justify-center>
                        <Countdown end="August 22, 2022"></Countdown>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-btn block @click="$emit(create_card, true)">
                temp card creator
            </v-btn>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <task-group :user="user"></task-group>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import TaskGroup from "./TaskGroup.vue";
    import RightDrawer from "./RightDrawer.vue";
    import FooterNav from "./FooterNav.vue";
    import Countdown from 'vuejs-countdown'

    export default {
        name: "task-board",
        components: {
            TaskGroup,
            Countdown,
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
        methods: {
            deadline: function () {
                return "August 22, 2022";
            }
        }
    }
</script>

<style scoped>
</style>