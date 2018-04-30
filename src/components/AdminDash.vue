<template>
    <!--<v-layout row justify-center>-->
            <!--<v-card>-->
                <!--<v-toolbar>-->
                    <!--<v-btn icon @click="adminDialog = false">-->
                        <!--<v-icon>close</v-icon>-->
                    <!--</v-btn>-->
                    <!--<v-toolbar-title class="dashTitle">Game Master Dashboard</v-toolbar-title>-->
                    <!--<v-spacer></v-spacer>-->
                    <!--&lt;!&ndash;<v-toolbar-items>&ndash;&gt;-->
                    <!--&lt;!&ndash;<v-btn dark flat @click="adminDialog = false">apply</v-btn>&ndash;&gt;-->
                    <!--&lt;!&ndash;</v-toolbar-items>&ndash;&gt;-->
                <!--</v-toolbar>-->

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
                                    <Countdown v-bind:end="deadline"></Countdown>
                                </v-layout>
                            </v-card>
                            <br>
                            <br>
                            <br>
                           <v-layout row justify-center>
     <v-date-picker class="smol" v-model="dline" @change="pickR"></v-date-picker>
    </v-layout>
                           
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
                                                                    <input v-model="threshold" @change="updateThreshold">
                                                                    <v-btn icon>
                                                                        
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
                                                    <v-icon right dark>whatshot</v-icon>
                                                </v-btn>
                                                <v-btn @click="goToCloud" block large color="blue darken-2">
                                                     Cloud Platform / Analytics
                                                    <v-icon right dark>cloud</v-icon>
                                                </v-btn>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-menu   offset-x left top allow-overflow full-width>
                         <v-btn @click="getUsers" block large slot="activator" color="green darken-2">
                                                    Players
                                                    <v-icon right dark>people</v-icon>
                                                </v-btn>
                        
                       <v-card height="60vh" width="40vw" light flat tile>
            <v-container grid-list-lg fluid>
                    <v-flex xs5 v-for="(user,index) in userList">
                        <v-btn :color="colorize(user)" @click="modUser(user,index);$forceUpdate;"
                        >{{user.name}}</v-btn>
                    </v-flex>
            </v-container>
        </v-card>
                    </v-menu>
                                                
                                               
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs12>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-btn block large color="red darken-4" @click="resetRelay">
                                                    RESET RELAY
                                                </v-btn>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    
                                </v-container>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            <!--</v-card>-->
    <!--</v-layout>-->
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
                threshold:1000,
                deadline:"May 20,2018",
                dline:'',
                rrr:[]

            }
        },
        methods: {
            pickR(evt){
                var input =evt;
                console.log(input);
            },
            colorize(user){
                if(user.admin){
                    return 'black';
                }
                if(user.banned){
                    return 'red';
                }
                if(!(user.banned)==true){
                    return 'green';
                }else{
                    return 'blue';
                }
            },
            modUser(user,index){
                if(user.admin){
                    return;
                }
                var vm=this;
                console.log(user.banned);
                console.log(user);
                  this.db.ref('users').child(vm.rrr[index]).child('banned').set(!(user.banned));
                
            },
            deadline2: function () {
                var ref =this.db.ref('metaData').child('endDate');
             
                var date="";
                var parent = this;
                return ref.once('value', function(snapshot){
                    var val = snapshot.val();
                    console.log(val);
                    date = val;
                   
                }).then(function(){
                    return date;
                });
                
                //return "August 22, 2022";
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
               
                var Ref = this.db.ref('users')
                var us = [];
                var parent = this;
                return Ref.once('value', function(snapshot){
                    var val = snapshot.val();
                    if (val !=null) {
                        us = Object.values(val);
                    }
                }).then(function(){
                    parent.userList=us;
                    console.log(parent.userList);
                    return parent.userList;
                });
            
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
            },
            resetRelay: function(){
                console.log("Game Reset");
                this.db.ref('cards').remove();
            },
            updateThreshold:function(){
                console.log(this.threshold);
                this.db.ref('metaData').child('threshold').set(this.threshold);
            }
        },
        mounted:function(){
            var vm = this;
            this.db.ref('metaData').child('threshold').once('value').then(snapshot=>{
                vm.threshold=snapshot.val();
            });
            this.db.ref('metaData').child('endDate').once('value').then(snapshot=>{
                vm.deadline=snapshot.val();
            });
            
            
            
                var cmRef = this.db.ref('users');
                var parent = this;
                return cmRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                        parent.rrr = Object.keys(val);
                    console.log('keys');
                    console.log(parent.rrr);
                });
         
    
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