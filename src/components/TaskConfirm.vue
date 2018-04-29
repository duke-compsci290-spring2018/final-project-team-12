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
                    Task Name
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon color="grey darken-2">
                        close
                    </v-icon>
                </v-btn>
            </v-toolbar>
            <v-container fluid grid-list-lg>
                <v-text-field light
                              name="card-name-input"
                              label="Confirmation Notes"
                              textarea
                              v-model="description"
                ></v-text-field>
                <v-toolbar dense color="grey darken-5">
                    <v-toolbar-title>Confirm</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <map-confirm v-if="location==null" :db="this.db" :target="target" v-on:get_location="location=$event; $forceUpdate()"></map-confirm>
                    <v-btn v-if="location!=null" @click="location=null" fab small color="green">
                        <v-icon color="white">
                            my_location
                        </v-icon>
                    </v-btn>
                    
                    
                    <photo-confirm v-if="image==null":db="this.db" :storageRef="this.storageRef" v-on:get_image="image=$event; $forceUpdate()"></photo-confirm>
                    <v-btn v-if="image!=null" @click="image=null" fab small color="green">
                        <v-icon color="white">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                   

                </v-toolbar>
            </v-container>
            <v-toolbar color="grey lighten-3">
                <v-spacer></v-spacer>
                
                <v-btn @click="checkFire" large icon color="red">
                    <v-icon color="white">
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
    import ConfirmationMethods from '../classes/ConfirmationMethods.js';
    export default {
        name: "task-confirm",
        data (){
            return{
                 open: false,
                location: null,
                image: null,
                text: false,
                description:'',
                target:{
                    lat:36,
                    lng:-78
                }
                
            }
        },
        components: {
            MapConfirm,
            PhotoConfirm
        },
        props:[
            'db',
            'storageRef'
        ],
        methods:{
            checkFire: function(){
                console.log(this.db);
                console.log(this.storageRef);
                this.$emit('get_location', this.location);
                this.$emit('get_image', this.image);
                this.$emit('get_description', this.description);
                
            },
            reset: function(){
                 this.open =false;
                this.location=null;
                this.image=null;
                this.text=false;
                this.description='';
                
        }
        }
    }
</script>

<style scoped>

</style>