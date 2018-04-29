<template>
    <v-layout row justify-center>
        <v-dialog
                v-model="adminDialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
        >
            <v-card>
                <v-toolbar>
                    <v-btn icon @click="adminDialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title class="dashTitle">Game Master Dashboard</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <!--<v-toolbar-items>-->
                    <!--<v-btn dark flat @click="adminDialog = false">apply</v-btn>-->
                    <!--</v-toolbar-items>-->
                </v-toolbar>

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
                                    <Countdown v-bind:end="deadline()"></Countdown>
                                </v-layout>
                            </v-card>
                        </v-flex>
                        <v-flex xs7>
                            <v-card color="grey darken-4">
                                <v-toolbar dense flat>
                                    <v-spacer></v-spacer>
                                    <v-toolbar-title class="subDashTitle">
                                        Game Control Center
                                    </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                                <v-container grid-list-lg>
                                    <v-flex xs12>
                                        <v-layout row>
                                            <v-flex xs12>
                                            <v-card dark color="amber darken-2">
                                                    <v-layout row>
                                                        <v-flex xs6>
                                                            <v-card height="100%" flat tile dark color="amber darken-2">
                                                                <v-toolbar dense flat color="transparent">
                                                                    <v-toolbar-title>
                                                                        Win Threshold
                                                                    </v-toolbar-title>
                                                                </v-toolbar>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex xs5>
                                                            <v-card height="100%" flat light>
                                                                <v-toolbar light dense flat color="transparent">
                                                                    <v-spacer></v-spacer>
                                                                    1000
                                                                    <v-btn icon>
                                                                        <v-icon color="amber darken-2">
                                                                            edit
                                                                        </v-icon>
                                                                    </v-btn>
                                                                </v-toolbar>
                                                            </v-card>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12>
                                        <v-layout row>
                                            <v-flex xs6>
                                                <v-btn @click="goToFirebase" block large color="orange darken-2">
                                                    Firebase / Site Maintenance
                                                    <v-icon right dark>open_in_new</v-icon>
                                                </v-btn>
                                                <v-btn @click="goToCloud" block large color="blue darken-2">
                                                     Cloud Platform / Analytics
                                                    <v-icon right dark>cloud</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-btn @click="getUsers" block large color="deep-orange darken-2">
                                                    Ban a User
                                                    <v-icon right dark>gavel</v-icon>
                                                </v-btn>
                                                <v-btn @click="getBanned" block large color="green darken-1">
                                                    Reinstate a User
                                                    <v-icon right dark>autorenew</v-icon>
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-btn block large color="red darken-4">
                                                    reset current relay
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-btn block large color="primary">
                                                    start new relay
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
            <v-expansion-panel>

            </v-expansion-panel>
        </v-dialog>
    </v-layout>
</template>

<script>
    import Countdown from 'vuejs-countdown'

    export default {
        name: "admin-dash",
        props:[
            'db'
        ],
        data() {
            return {
                adminDialog: true,
                userList:[],
                banList:[],
            }
        },
        methods: {
            deadline: function () {
                return "August 22, 2022";
            },
            goToFirebase: function (){
                //database
               window.open('https://todo-list-7368e.firebaseio.com/');
               
            },
            goToCloud: function(){
                 //cloud platform
                window.open('https://console.cloud.google.com/apis/dashboard?project=todo-list-7368e');
            },
            getUsers: function(){
                this.$bindAsArray('this.userList', this.db.ref('users'));
                console.log(this.userList);
                return this.userList;
            },
            getBanned: function(){
                this.$bindAsArray('this.userList', this.db.ref('users'));
                this.banList = this.userList.filter(user=>user.banned==true);
                console.log(this.banList);
                return this.banList;
            },
            banUser:function(user){
                db.ref('users').child(user).child('banned').set(true);
            },
            reinstateUser: function(user){
                db.ref('users').child(user).child('banned').set(false);
            }
        },
        components: {
            Countdown
        }
    }
</script>

<style scoped>
    .dashTitle {
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
        color: #d0d0d0;
    }

    .subDashTitle {
        font-family: 'Quicksand', sans-serif;
        font-size: 25px;
        color: #d0d0d0;
    }

    Countdown {
        min-height: 30vh;
        width: 1000px;
        height: 500px;
    }
</style>