<template>
  <v-app dark>
    <v-toolbar prominent>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <span class="thin">relay</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <task-board>
      <task-group></task-group>
    </task-board>
  </v-app>
</template>

<script>
    import LeftDrawer from './components/LeftDrawer.vue';
    import RightDrawer from './components/RightDrawer.vue';
    import TaskBoard from './components/TaskBoard.vue';

    export default {
        data () {

        },
        methods: {
          loggedIn: function(){

          },
        },
        components:{
            LeftDrawer,
            RightDrawer,
            TaskBoard
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
