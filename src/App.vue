<template>
    <v-app dark>
        <v-toolbar prominent>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <span class="thin">relay</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <!--<login-->
                <!--v-if="!loggedIn() && !guestFlag"-->
                <!--v-on:user_profile="loadUser($event)"-->
                <!--v-on:guest_login="guestLogin()"-->
        <!--&gt;</login>-->
        <task-board v-if="!loggedIn()"></task-board>
    </v-app>
</template>

<script>
    import LeftDrawer from './components/LeftDrawer.vue';
    import RightDrawer from './components/RightDrawer.vue';
    import TaskBoard from './components/TaskBoard.vue';
    import Login from './components/Login.vue';
    import Map1 from './components/Map1.vue';
    import TaskConfirm from './components/TaskConfirm.vue';
    import TaskCreate from './components/TaskCreate.vue';

    import User from "./DataStructs.js";

    var config = {
        apiKey: "AIzaSyDhlhBm0bC7eCM_p2hO4AbEOHpdu8uTCsk",
        authDomain: "todo-list-7368e.firebaseapp.com",
        databaseURL: "https://todo-list-7368e.firebaseio.com",
        projectId: "todo-list-7368e",
        storageBucket: "todo-list-7368e.appspot.com",
        messagingSenderId: "422071649995"
    };

    var db = firebase.initializeApp(config).database();
    var storageRef = firebase.storage().ref();
    var usersRef = db.ref('users');
    var imagesRef = db.ref('images');


    export default {
        db,
        storageRef,
        data() {
            return {
                db: db,
                storageRef: storageRef,
                googleProfile: null,
                currentUser: null,
                guestFlag: false
            }
        },
        methods: {
            checkFire: function () {
                console.log(this.db);
                console.log(this.storageRef);
            },
            loggedIn: function () {
                console.log("logged in : " + this.currentUser);
                return this.currentUser != null && !this.guestFlag;
            },
            guestLogin: function () {
                this.guestFlag = true;
            },
            loadUser: function (profile) {
                console.log(profile);
                console.log('Start External');
                console.log(profile);
                this.googleProfile = profile;
                console.log(this.googleProfile);
                if (!this.userExists(this.googleProfile)) {
                    this.addNewUser(this.googleProfile);
                }
                this.loadGame();
            },
            userExists: function (profile) {
                var parent = this;
                return usersRef.once('value').then(function(snapshot) {
                    var ret = false;
                    snapshot.forEach(function(u){
                        if(u.child('email').val()==profile.getEmail()){
                            ret = true;
                            this.currentUser = u.val();
                        }
                    });
                    return ret;
                });
            },
            addNewUser: function (profile) {
                var u = new User(profile);
                usersRef.push(u);
                this.currentUser = u;
            },
            loadGame(){
                // get user pref cards
                // show bounty board
            }
        },
        components: {
            LeftDrawer,
            RightDrawer,
            TaskBoard,
            Login,
            TaskConfirm,
            TaskCreate
        }
    }
</script>

<style>

    .g-signin-button {
        /* This is where you control how the button looks. Be creative! */
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
    }

    body, .thin {
        font-family: 'Quicksand', sans-serif;
        font-size: 35px;
        color: #d0d0d0;
    }
</style>
