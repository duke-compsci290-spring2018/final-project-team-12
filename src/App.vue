<template>
    <v-app dark>
        <v-toolbar prominent>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <span class="thin">relay</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <login
                v-if="!loggedIn() && !guestFlag"
                v-on:user_profile="loadUser($event)"
                v-on:fake_login="fakeLogin($event)"
                v-on:guest_login="guestLogin()">
    </login>
        <task-board
                :user="currentUser"
                :storageRef="storageRef"
                    :db="db"
                v-if="routeTask"
        ></task-board>

        <proposal-board
                :user="currentUser"
                :db="db"
                :cards="this.cards"
                v-if="routeProposal"
        ></proposal-board>

        <approval-board
                 :user="currentUser"
                :db="db"
                :cards="this.cards"
                v-if="routeApproval"
        ></approval-board>

        <admin-dash :db="db" v-if="routeAdmin"></admin-dash>
        <v-footer>
            <footer-nav
                    :user="currentUser"
                    v-on:page_change="showBoard($event)"
            ></footer-nav>
        </v-footer>
    </v-app>
</template>

<script>
    import RightDrawer from './components/RightDrawer.vue';
    import TaskBoard from './components/TaskBoard.vue';
    import ProposalBoard from './components/ProposalBoard.vue';
    import ApprovalBoard from './components/ApprovalBoard.vue';
    import Login from './components/Login.vue';
    import Map1 from './components/Map1.vue';
    import TaskConfirm from './components/TaskConfirm.vue';
    import TaskCreate from './components/TaskCreate.vue';
    import AdminDash from './components/AdminDash.vue';
    import FooterNav from './components/FooterNav.vue';

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
    var cardsRef = db.ref('cards');
    var imagesRef = db.ref('images');


    export default {
        db,
        storageRef,
        usersRef,
        imagesRef,
        data() {
            return {
                db: db,
                storageRef: storageRef,
                usersRef:usersRef,
                imagesRef:imagesRef,
                googleProfile: null,
                currentUser: null,
                guestFlag: false,
                adminFlag: false,

                routeTask: true,
                routeProposal: false,
                routeApproval: false,
                routeAdmin: false,
                routeStat: false
            }
        },
        firebase: {
            users: usersRef,
            cards: cardsRef,
            images: imagesRef

        },
        methods: {
            fakeLogin: function(user){
                this.currentUser = user;
                this.adminFlag = true;
                this.routeTask=true;
            },
            showBoard: function(boardName){
                console.log(boardName);
                switch(boardName){
                    case "task":
                        console.log("fuck me in the ass");
                        this.routeTask = true;
                        this.routeProposal = this.routeApproval = this.routeAdmin = this.routeStat = false;
                        break;
                    case "proposal":
                        this.routeProposal = true;
                        this.routeTask = this.routeApproval = this.routeAdmin = this.routeStat = false;
                        break;
                    case "approval":
                        this.routeApproval = true;
                        this.routeProposal = this.routeTask = this.routeAdmin = this.routeStat = false;
                        break;
                    case "stat":
                        this.routeStat = true;
                        this.routeProposal = this.routeApproval = this.routeAdmin = this.routeTask = false;
                        break;
                    case "admin":
                        this.routeAdmin = true;
                        this.routeProposal = this.routeApproval = this.routeTask = this.routeStat = false;
                        break;
                }
            },
            checkFire: function () {
                console.log(this.db);
                console.log(this.storageRef);
            },
            loggedIn: function () {
                console.log("logged in : " + this.currentUser);
                return this.currentUser != null && !this.guestFlag;
            },
            guestLogin: function () {
                this.routeTask = true;
                this.guestFlag = true;
            },
            adminLogin: function() {
                this.adminFlag = true;
            },
            loadUser: function (profile) {
                console.log(profile);
                console.log('Start External');
                console.log(profile);
                this.googleProfile = profile;
                console.log(this.googleProfile);
                var parent = this;
                this.userExists(this.googleProfile).then(function(){
                    parent.loadGame();
                });
            },
            userExists: function (profile) {
                var parent = this;
                return usersRef.once('value').then(function(snapshot) {
                    var ret = false;
                    snapshot.forEach(function(u){
                        if(u.child('email').val()==profile.getEmail()){
                            ret = true;
                            parent.currentUser = u.val();
                        }
                    });
                    return {"ret": ret, "parent":parent};
                }).then(function(r){
                    if(!r.ret){
                        r.parent.addNewUser(r.parent.googleProfile);
                    }
                });
            },
            addNewUser: function (profile) {
                var parent = this;
                var u = new User(profile);
                console.log("");
                usersRef.push(u).then(function(){
                    parent.currentUser = u;
                });
            },
            loadGame(){
                console.log("when loaded currentUser: " + this.currentUser);
            }
        },
        components: {
            RightDrawer,
            TaskBoard,
            Login,
            TaskConfirm,
            TaskCreate,
            AdminDash,
            ProposalBoard,
            ApprovalBoard,
            FooterNav,

        },
        created: {

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
