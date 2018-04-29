<template>
    <v-menu origin="center center" top top offset-y v-model="visibility" :close-on-content-click=false>
        <v-btn fab small color="grey lighten-1" slot="activator" @click="getLocation();center=pos">
            <v-icon color="white">
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

                        <gmap-circle
                                :editable="false"
                                :center="fakeTarget"
                                :draggable="false"
                                :radius=5000
                                :options="{strokeColor: '#011AC7',
                                   strokeOpacity: 0.8,
                                   strokeWeight: 1,
                                   fillColor: '#011AC7',
                                   fillOpacity: 0.3}"
                        ></gmap-circle>


                    </gmap-map>
                </v-flex>
                <v-btn @click="getLocation();center=pos" :disabled="bActive" light>
                    <!--btn here-->
                    Refresh Location

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
        name: "map-confirm",
        props: [
            'db',
            'target'
        ],
        data() {

            return {
                bActive: true,
                visibility: true,

                pos: {
                    lat: 0,
                    lng: 0
                },
                center: {
                    lat: 0,
                    lng: 0
                },
                zoom: 12,
                fakeTarget: {
                    lat: 36,
                    lng: -79
                },
            }
        },
        mounted: function () {
            //console.log("target");
            //console.log(target);
        },
        methods: {
            confirmTarget(pos) {
                console.log('Emitting Location');
                console.log(pos);
                this.$emit('get_location', pos);
            },
            getLocation() {

                var vm = this;
                vm.bActive = true;
                console.log("running getLoc");
                // Try HTML5 geolocation for current user location
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        vm.pos.lat = position.coords.latitude;
                        vm.pos.lng = position.coords.longitude;
                        console.log("function got location");
                        console.log(vm.pos);
                        vm.bActive = false;
                    });


                } else {
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