<template>
    <v-dialog value="true" max-width="80vh" v-model="open">
        <v-btn class="newTask" large block light
               slot="activator"
               @click="reset()"
               color="grey lighten-2">
            Claim
        </v-btn>
        <v-card light>
            <v-toolbar light flat color="grey lighten-3">
                <v-toolbar-title color="black">
                    {{cardJson.name}}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon color="grey darken-2" @click="open=false;">
                        close
                    </v-icon>
                </v-btn>
            </v-toolbar>
            <v-container fluid grid-list-lg>
                <v-toolbar dense color="grey darken-5">
                    <v-toolbar-title>Confirm</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <text-confirm v-if="confirmMethods.text  && text==null"
                                  v-on:get_text="loadText($event)"
                    ></text-confirm>
                    <v-btn fab small depressed color="success" v-if="text!=null">
                        <v-icon color="white">
                            comment
                        </v-icon>
                    </v-btn>
                    <map-confirm v-if="confirmMethods.location!=null && location==null" :db="this.db"
                                 v-on:get_location="loadLocation($event)"
                    ></map-confirm>
                    <v-btn fab small depressed color="success" v-if="location!=null">
                        <v-icon color="white">
                            my_location
                        </v-icon>
                    </v-btn>
                    <photo-confirm v-if="confirmMethods.image && image==null" :db="this.db" :storageRef="this.storageRef"
                                   v-on:get_image="loadImage($event)"
                    ></photo-confirm>
                    <v-btn fab small depressed color="success" v-if="image!=null">
                        <v-icon color="white">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-container>
            <v-toolbar color="grey lighten-3">
                <v-spacer></v-spacer>
                <v-btn v-if="allConfirmed()" @click="checkFire" large icon color="red">
                    <v-icon color="white">
                        check
                    </v-icon>
                </v-btn>
                <v-btn disabled v-else large icon color="grey darken-1">
                    <v-icon color="grey lighten-3">
                        check
                    </v-icon>
                </v-btn>
            </v-toolbar>
        </v-card>
    </v-dialog>
</template>

<script>

      import Map1 from './Map1.vue';
    import MapConfirm from "./MapConfirm.vue";
    import PhotoConfirm from "./PhotoConfirm.vue";
    import XPhoto from "./XPhoto.vue";
    import TextConfirm from "./TextConfirm.vue";
    import ConfirmationMethods from '../classes/ConfirmationMethods.js';
    export default {
        name: "task-confirm",
        data (){
            return{
                confirmMethods: {},
                open: false,
                location: null,
                image: null,
                text: null,
                target: null
            }
        },
        components: {
            MapConfirm,
            PhotoConfirm,
            TextConfirm,
            XPhoto
        },
        props:[
            'db',
            'storageRef',
            'cardJson',
            'cardsRef'
        ],
        methods:{
            allConfirmed: function(){
                if(this.confirmMethods.location != null && this.location == null){
                    return false;
                }
                if(this.confirmMethods.image && this.image == null){
                    return false;
                }
                if(this.confirmMethods.text && this.text == null){
                    return false;
                }
                return true;
            },
            checkFire: function(){
                console.log(this.db);
                console.log(this.storageRef);
                // this.$emit('get_location', this.location);
                // this.$emit('get_image', this.image);
                // this.$emit('get_description', this.description);
            },
            reset: function(){
                this.open =false;
                this.location=null;
                this.image=null;
                this.text=null;
                this.description='';
            },
            getConfirmMethods: function(){
                var cmRef = this.cardsRef.child(this.cardJson['.key']).child('confirmationMethods');
                var parent = this;
                console.log(cmRef);
                return cmRef.once('value', function(snapshot){
                    var val = snapshot.val();
                    console.log(val);
                    if (val !=null) {
                        parent.confirmMethods = Object.assign({}, val);
                    }
                });
            },
            loadText: function(txt){
                this.text=txt;
            },
            loadImage: function(uri){
                this.image=uri;
            },
            loadLocation: function(loc){
                this.location=loc;
            }
        },
        created() {
            this.getConfirmMethods()
        }
    }
</script>

<style scoped>

</style>