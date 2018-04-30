<template>
    <v-container fluid grid-list-lg>
        <v-layout row>
            <v-flex xs12>
                <task-group :cards="cards" :cardsRef="cardsRef" :usersRef="usersRef" :user="user" :storageRef="this.storageRef" :db="this.db"></task-group>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs6>
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
            <v-flex xs6>
                <v-card light v-if="user!=null">
                    <v-toolbar dense flat>
                        <v-spacer></v-spacer>
                        <v-toolbar-title class="subDashTitle">
                            {{user.name}}'s Point Total
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-layout row justify-center>
                        {{getUserScore(user)}} / {{threshold}}
                    </v-layout>
                </v-card>
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
        data() {
            return {
                cardsRef: this.db.ref('cards'),
                usersRef: this.db.ref('users'),
                threshold:1000
            }
        },
        props: [
            'db',
            'storageRef',
            'user',
            'relay',
            'cards'
        ],
        methods: {
            deadline: function () {
                return "August 22, 2022";
            },
            getUserScore: function(user){
                var accum = 0;
                var parent = this;
                this.cards.forEach(function(card){
                    if(card.confirmed){
                        var points = card.points;
                        var thisUser = card.claimer;
                        if(thisUser.email == user.email) {
                            accum += points;
                        }
                    }
                })

                return accum;
            }
        },
        mounted:function(){
             var vm = this;
            this.db.ref('metaData').child('threshold').once('value').then(snapshot=>{
                vm.threshold=snapshot.val();
            });
        }
    }
</script>

<style scoped>
    .subDashTitle{
        font-family: 'Quicksand', sans-serif;
        font-size: 25px;
        color: #d0d0d0;
    }
</style>