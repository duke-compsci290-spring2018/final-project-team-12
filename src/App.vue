<template>
  <v-app dark>
    <v-toolbar prominent>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="thin">relay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
      <v-btn @click="checkFire">DO IT</v-btn>
  <task-confirm :db="db" :storageRef="storageRef"></task-confirm>
<!--    <task-create></task-create>-->
    <!--<login v-if="!loggedIn() && firstVisit()" v-on:user_profile="recProfile($event)"></login>-->
    <task-board>
      <task-group></task-group>
    </task-board>
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

   

    export default {
         db,
        storageRef,
        data () {
            return{
                db:db,
        storageRef:storageRef,
            googleUser:null,
            basicInfo:null,
            }
        },
        methods: {
            checkFire: function(){
                console.log(this.db);
                console.log(this.storageRef);
            },
            loggedIn: function(){
              return false;
            },
            firstVisit: function(){
              return true;
            },
            recProfile: function(profile){
                console.log('Start External');
                console.log(profile);
                this.googleUser=profile;
                console.log(this.googleUser);
                //this.basicInfo = this.googleUser.getBasicProfile();
                //console.log('Basic');
                //console.log(this.basicInfo);
            }
        },
        components:{
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
