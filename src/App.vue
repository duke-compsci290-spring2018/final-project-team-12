<template>
  <v-app dark>
    <v-toolbar prominent>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="thin">relay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <login v-if="!loggedIn() && firstVisit()"></login>
    <v-else>
    <task-board>
      <task-group></task-group>
    </task-board>
    </v-else>
  </v-app>
</template>

<script>
    import LeftDrawer from './components/LeftDrawer.vue';
    import RightDrawer from './components/RightDrawer.vue';
    import TaskBoard from './components/TaskBoard.vue';
    import Login from './components/Login.vue';

    export default {
        data () {

        },
        methods: {
            loggedIn: function(){
              return false;
            },
            firstVisit: function(){
              return true;
            }
        },
        components:{
            LeftDrawer,
            RightDrawer,
            TaskBoard,
            Login
        }
    }
</script>

<style>


  body, .thin {
    font-family: 'Quicksand', sans-serif;
    font-size: 35px;
    color: #d0d0d0;
  }
</style>
