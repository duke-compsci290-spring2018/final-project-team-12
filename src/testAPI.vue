<template>
    <div>
        <head>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.6/vue.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.16.4/lodash.js"></script> 
    <script src="vue-google-maps.js"></script> 
            <style>
        #map {
            height: 60%;
        }
        html, body {
            height: 80%;
            margin: 0;
            padding: 0;
        }
    </style>
    </head>
    
        <h1>LOCATOR</h1>
            <gmap-autocomplete
                           @place_changed="setPlace">
        </gmap-autocomplete>

        <button @click="usePlace">Add</button>
        <br>
        <button @click="addEvent">Add Event</button>
        <gmap-map
                  :center="center"
                  :zoom="zoom"
                  @click="addMarker"
                  style="height: 480px;"
                  >
            <gmap-marker
                         v-for="(m, index) in markers"
                         :key="index"
                         :position="m.position"
                         :clickable="true"
                         :draggable="true"
                         @click="center = m.position"
                         ></gmap-marker>
            <gmap-marker
                         v-if="this.place"
                         label="Event Here"
                         :draggable="false"
                         :position="{
                                    lat: this.place.geometry.location.lat(),
                                    lng: this.place.geometry.location.lng(),
                                    }"
                         ></gmap-marker>
            
            <gmap-circle
                         :center="pos"
                         :radius="10"
                         :options="{strokeColor: '#011AC7',
                                   strokeOpacity: 0.8,
                                   strokeWeight: 1,
                                   fillColor: '#011AC7',
                                   fillOpacity: 0.3}"
                         ></gmap-circle>

        </gmap-map>
    
    </div>
</template>

<script>
   
    
    export default {
        name:'Locator',
        data () {
            return {
            }
        },
        props: [
            
        ],
        
    }
</script>

<style>
    
</style>