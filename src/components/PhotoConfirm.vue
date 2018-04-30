<template>
    <v-menu origin="center center" top top offset-y :close-on-content-click=false>


        <v-btn fab small color="grey lighten-1" slot="activator">
            <v-icon color="white">
                add_a_photo
            </v-icon>
        </v-btn>


        <v-card max-width="60vh" light>
            <v-container grid-list-md fluid>
                <v-flex xs9>
                    <!--Image Upload HERE-->
                    <input type="file" id="photoFile" @change="readyFile"/>


                </v-flex>


                <!--<v-btn :disabled="locked" @click="visibility=false" light>
                    Confirm Image
                </v-btn>-->
            </v-container>
        </v-card>
    </v-menu>
</template>

<script>

    export default {
        props: [
            'db',
            'storageRef'
        ],
        name: "photo-confirm",
        data() {

            return {
                visibility: true,
                locked: false,
                place: null,
                eLoc: "",

                center: {
                    lat: 0,
                    lng: 0
                },

            }
        },
        methods: {
            readyFile(evt) {
                this.locked = true;
                var vm = this;
                var input = evt.target.files;
                //var input = document.getElementById('photoFile');
                console.log("SPEC");
                console.log(input);

                if (input.length > 0) {
                    var file = input[0];
                    var rn = new Date();
                    // get reference to a storage location
                    vm.storageRef.child('images/' + file.name + rn.getTime())
                        .put(file)
                        .then(snapshot => this.addImage(snapshot.downloadURL));
                    // reset input value
                    input.value = '';
                } else {
                    console.log("invalid input");
                    this.locked = false;
                }


            },
            confirmImage() {
                console.log('Confirming Image');

                this.locked = true;
                var input = document.getElementById('photoFile');
                console.log(input);
                console.log(input.files.length);
                if (input.files.length > 0) {
                    var file = input.files[0];
                    var rn = new Date();
                    // get reference to a storage location
                    storageRef.child('images/' + file.name + rn.getTime())
                        .put(file)
                        .then(snapshot => this.addImage(snapshot.downloadURL));
                    // reset input value
                    input.value = '';
                } else {
                    console.log("invalid input");
                    this.locked = false;
                }

            },
            addImage(loc) {
                // now that image has been stored in Firebase, create a reference to it in database
                this.db.ref('/images').push(loc);
                console.log("set");
                console.log(loc);
                this.$emit('get_image', loc);
                this.locked = false;

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