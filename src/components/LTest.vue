<template>
    <v-menu  origin="center center" top top offset-y :close-on-content-click=false>
        
        
          <v-btn fab small color="grey lighten-1" slot="activator">
            <v-icon color="white">
                add_a_photo
            </v-icon>
        </v-btn>
        
        
        <v-card max-width="60vh" light>
            <v-container grid-list-md fluid>
                <v-flex xs9>
                    <!--Image Upload HERE-->
  <input type="file" id="photoFile" name="files[]" />
                    
                
                </v-flex>
               

                <v-btn :disabled="locked" @click="confirmImage(); visibility=false" light>
                    Confirm Image
                </v-btn>
            </v-container>
        </v-card>
    </v-menu>
</template>

<script>

    export default {
        props:[
            'db',
            'storageRef'
        ],
        name: "photo-confirm",
        data(){
            
            return{
                
                visibility:true,
                locked:false,
                place:null,
                eLoc:"",
                
                center:{
                    lat:0,
                    lng: 0
                },
               
            }
        },
        methods:{
            confirmImage(){
                console.log('Confirming Image');
                this.locked = true;
                  var input = document.getElementById('photoFile');
                  if (input.files.length > 0) {
                var file = input.files[0];
                var rn = new Date();
                // get reference to a storage location
                this.storageRef.child('images/' + file.name+rn.getTime())
                    .put(file)
                    .then(snapshot => this.addImage(snapshot.downloadURL));
                // reset input value
                input.value = '';
            }else{
                console.log("invalid input");
            }
    
            },
            addImage(loc) {
            // now that image has been stored in Firebase, create a reference to it in database
            this.db.ref( '/images').push(loc);
            console.log("set");
                this.locked = false;

        },
            determineWinner(){
                var max =0;
                var name = '';
                //for users in users
                //update name and max
                //increment winner's db winCount
                
            },
            endGame(){
                //clear all game fields (points, tasks, players)
                //reset clock
                
            },
            StartGame(){
                
            }
            
              

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