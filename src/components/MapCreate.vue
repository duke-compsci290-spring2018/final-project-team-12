<template>
    <v-menu  origin="center center" top top offset-y v-model="visibility" :close-on-content-click=false>
        <v-btn fab depressed small color="grey lighten-2" slot="activator" @click="pos=getLocation(pos)">
            <v-icon color="grey">
                my_location
            </v-icon>
        </v-btn>
        <v-card max-width="60vh" light>
            <v-container grid-list-md fluid>
                <v-flex xs9>
                    <!--MAP HERE-->

                    <gmap-map
                            :center="pos"
                            :zoom="zoom"
                            style="height:60vh;width:50vw"
                    >
                        <gmap-marker
                                :position="pos"
                                :clickable="true"
                                :draggable="false"
                                @click="center = pos"
                        ></gmap-marker>

                    </gmap-map>
                </v-flex>
                <v-btn @click="pos=getLocation(pos);" light>
                    <!--btn here-->
                    Set Location

                </v-btn>

                <v-btn @click="confirmTarget(pos); visibility=false" light>
                    Confirm Location
                </v-btn>
            </v-container>
        </v-card>
    </v-menu>
</template>

<script>
    export default {
        name: "map-create",
        data(){

            return{
                visibility:true,
                pos:{
                    lat:0,
                    lng: 0
                },
                center:{
                    lat:0,
                    lng: 0
                },
                zoom:12
            }
        },
        methods:{
            confirmTarget(pos){
                console.log('Emitting Location');
                console.log(pos);
                this.$emit('get_location', pos);
            },
            getLocation(pos1){

                console.log("running getLoc");
                // Try HTML5 geolocation for current user location
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        pos1.lat =position.coords.latitude;
                        pos1.lng =position.coords.longitude;
                        console.log("function got location");
                        console.log(pos1);

                    }).then(function(){
                        return pos1});


                }else {
                    // Browser doesn't support Geolocation

                    console.log("failed to get location");
                }
            },

        }
    }
</script>

<style scoped>

    #map {
        height: 60%;
    }
    html, body {
        height: 80%;
        margin: 0;
        padding: 0;
    }
</style>