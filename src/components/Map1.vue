<template>
<div>
<h4>YOUR LOCATION</h4>
    <button @click="confirmTarget(pos)">Confirm Location</button>
<gmap-map
                  :center="center"
                  :zoom="zoom"
                  style="height: 480px;"
                  >
            <gmap-marker
                         :position="pos"
                         :clickable="true"
                         :draggable="false"
                         @click="center = pos"
                         ></gmap-marker>

        </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "map1",
        data(){
            return{
                pos:{
                    lat:0,
                    lng: 0
                },
                center:pos,
                zoom:12
            }
        },
        methods:{
            ConfirmTarget(pos){
                console.log('Emitting Location');
                console.log(pos);
                this.$emit('get_location', pos);
            },
              getLocation(pos1){

            console.log("running getLoc");
            // Try HTML5 geolocation for current user location
            if (navigator.geolocation) {
                console.log("got location");
                navigator.geolocation.getCurrentPosition(function(position) {
                        pos1.lat =position.coords.latitude;
                        pos1.lng =position.coords.longitude;
                    
                     console.log("function got location");
                });
                 
                    
            }else {
                // Browser doesn't support Geolocation
                
                console.log("failed to get location");
            }
        },

        }
    }
</script>

<style scoped>
   
    span {
        font-family: 'Quicksand', sans-serif;
        font-size: 35px;
        color: #d0d0d0;
    }
</style>