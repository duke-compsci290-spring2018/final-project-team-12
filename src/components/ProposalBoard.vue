<template>
    <div>
        your SCORE + time left
        <v-container fluid grid-list-lg>
            <v-layout row>
                <v-flex xs12>
                    <proposal-group :user="user"></proposal-group>
                </v-flex>
            </v-layout>
        </v-container>
        <v-footer>
            <footer-nav :user="user"></footer-nav>
        </v-footer>
    </div>
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
</style>