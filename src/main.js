import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import GSignInButton from 'vue-google-signin-button'
import * as VueGoogleMaps from 'vue2-google-maps';


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

Vue.use(GSignInButton)
Vue.use(Vuetify)
Vue.use(VueFire);
 Vue.use(VueGoogleMaps, {
            load: {
                key: 'AIzaSyDZ3qbbsYsPvWV90w1SJd4z86zKAtsMAtE',
                libraries: 'places'
            }
        })

new Vue({
  el: '#app',
  render: h => h(App)
})gi
