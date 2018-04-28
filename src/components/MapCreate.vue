<template>
    <v-menu origin="center center" top top offset-y v-model="visibility" :close-on-content-click=false>
        <v-btn fab depressed small color="grey lighten-2" slot="activator" @click="pos=getLocation(pos);center=pos">
            <v-icon color="grey">
                my_location
            </v-icon>
        </v-btn>
        <v-card max-width="60vh" light>
            <v-container grid-list-md fluid>
                <v-flex xs9>
                    <gmap-map
                            :center="pos"
                            :zoom="zoom"
                            style="height:60vh;width:80vw"
                    >
                        <gmap-marker
                                :position="pos"
                                :clickable="true"
                                :draggable="false"
                                @click="center = pos"
                        ></gmap-marker>

                        <gmap-circle
                                ref="circle"
                                :@radius_changed="rUpdate(this.radius)"
                                :editable="true"
                                :center="pos"
                                :draggable="false"
                                :radius=1000
                                :options="{strokeColor: '#011AC7',
                                   strokeOpacity: 0.8,
                                   strokeWeight: 1,
                                   fillColor: '#011AC7',
                                   fillOpacity: 0.3}"
                        ></gmap-circle>


                    </gmap-map>

                </v-flex>
                <v-flex xs1>
                    <gmap-autocomplete @place_changed="setPlace">
                    </gmap-autocomplete>
                </v-flex>
                <v-btn @click="pos=getLocation(pos);" light>
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
        data() {

            return {
                place: null,
                eLoc: "",
                rad: 1000,
                visibility: true,
                pos: {
                    lat: 0,
                    lng: 0
                },
                center: {
                    lat: 0,
                    lng: 0
                },
                zoom: 12
            }
        },
        methods: {
            confirmTarget(pos) {
                console.log('Emitting Location');
                console.log(pos);
                console.log("radius:");
                console.log(this.rad);
                this.$emit('get_location', pos);
            },
            getLocation(pos1) {
                var vm = this;
                console.log("running getLoc");
                // Try HTML5 geolocation for current user location
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        pos1.lat = position.coords.latitude;
                        pos1.lng = position.coords.longitude;

                        console.log(pos1);

                    }).then(function () {
                        console.log("promise returned");
                        vm.center = pos1;
                        return pos1
                    });


                } else {
                    // Browser doesn't support Geolocation

                    console.log("failed to get location");
                }
            },
            rUpdate(radius) {
                this.rad = radius;
                console.log("radius change");
                console.log(radius);
            },
            setPlace(place) {
                this.place = place;
                this.eLoc = place.name;
                this.center = {
                    lat: this.place.geometry.location.lat(),
                    lng: this.place.geometry.location.lng(),
                };
                this.pos = this.center;
                console.log("CEN");
                console.log(this.center);
                console.log(place);
            },
            //keep the marker permanently on the map
            usePlace(place) {
                if (this.place) {
                    this.markers.push({
                        position: {
                            lat: this.place.geometry.location.lat(),
                            lng: this.place.geometry.location.lng(),
                        }
                    })
                    this.place = null;
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