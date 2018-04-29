<template>
    <v-card dark height="50vh" min-width="800px">
        <v-container height="50vh" fluid grid-list-md>
            <v-layout row>
                <v-flex xs12>
                    <v-card tile height="100%" flat dark>
                        <v-toolbar color="transparent" flat>
                            <v-toolbar-title class="name">{{cardJson.name}}</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text class="points">
                            {{cardJson.points}} pts
                        </v-card-text>
                       <v-layout justify-center row>
                                <v-flex xs6>
                                    <v-btn @click="voteYes()" block v-bind:disabled="voted()" medium color="green darken-2">
                                        <v-icon left dark>thumb_up</v-icon>
                                        {{yes.length}}
                                    </v-btn>
                                </v-flex>

                                <v-flex xs6>
                                    <v-btn @click="voteNo()" block v-bind:disabled="voted()" medium color="red darken-2">
                                        <v-icon left dark>thumb_down</v-icon>
                                        {{no.length}}
                                    </v-btn>
                                </v-flex>
                            </v-layout>


                    </v-card>
                </v-flex>
                <v-flex xs5>
                    <v-card flat height="100%" tile light>
                        <v-toolbar dense flat color="transparent">
                            <v-spacer>
                            </v-spacer>
                            <v-chip disabled outline small>
                               {{cardJson.due}}
                            </v-chip>
                            <v-spacer>
                            </v-spacer>
                        </v-toolbar>
                        <v-card-text class="description">
                            {{cardJson.description}}

                            <v-spacer></v-spacer>
                            <v-layout justify-center row>
                                  
                                <v-btn fab small color="grey lighten-1" slot="activator" @click="showMap=!showMap">
                                    <v-icon center small color="black">
                                        my_location
                                    </v-icon>
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn fab small icon color="grey lighten-1">
                                    <v-icon center color="black">
                                        add_a_photo
                                    </v-icon>
                                </v-btn>
                                
                                <v-btn fab small color="grey lighten-1" slot="activator" @click="">
                                    <v-icon center small color="black">
                                        comment
                                    </v-icon>
                                </v-btn>
                            </v-layout>


                        </v-card-text>
<v-card v-if="showMap">

       <gmap-map
                  :center="cardJson.confirmation.location"
                  :zoom="zoom"
                  style="height:20vh;width:30vw"
                  >
            <gmap-marker
                         :position="cardJson.confirmation.location"
                         :clickable="true"
                         :draggable="false"
                         @click=""
                         ></gmap-marker>
                        
                           <gmap-circle
                                :editable="false"
                                :center="cLocation"
                                :draggable="false"
                                :radius=1000
                                :options="{strokeColor: '#011AC7',
                                   strokeOpacity: 0.8,
                                   strokeWeight: 1,
                                   fillColor: '#011AC7',
                                   fillOpacity: 0.3}"
                        ></gmap-circle>


        </gmap-map>
    
    </v-card>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "approval-card",
        props: [
            "cardJson",
            'user',
            'cardsRef'
               ],
        data() {
            return {
                hasVoted: false,
                yes: [],
                no: [],
                showMap:false,
                showImage:false,
                showComment:false,
                cLocation:null,
                CARD:null
            }
        },
           methods: {
            getVotes(name){
                var votesRef = this.cardsRef.child(this.cardJson['.key']).child(name);
                var votes = [];
                var parent = this;
                return votesRef.once('value', function(snapshot){
                    var val = snapshot.val();
                    if (val !=null) {
                        votes = Object.values(val);
                    }
                }).then(function(){
                    if(name=="noConfirm"){
                        parent.no=votes;
                    }
                    if(name=="yesConfirm"){
                        parent.yes=votes;
                    }
                    return votes;
                });
            },
            getNoVotes(){
                this.getVotes('noConfirm');
                console.log(this.no);
            },
            getYesVotes(){
                this.getVotes('yesConfirm');
                console.log(this.yes);
            },
            canYesVote(){
                if(this.yes.indexOf(this.user.email)<0){
                    return true;
                }
                return false;
            },
            canNoVote(){
                if(this.no.indexOf(this.user.email)<0){
                    return true;
                }
                return false;
            },
            voteYes(){
                this.hasVoted=true;
                this.yes.push(this.user.email);
                this.$emit('approval_yes', true);
            },
            voteNo(){
                this.hasVoted=true;
                this.no.push(this.user.email);
                this.$emit('approval_no', true);
            },
            voted(){
                return !(this.canYesVote() && this.canNoVote());
            }
        },
        created() {
            var vm = this;
          this.cardJson.once('value', function(snapshot){
                     vm.CARD = snapshot.val();
          });
            console.log(vm.CARD);
            this.getYesVotes(),
            this.getNoVotes()
        }
    }
</script>

<style scoped>
    .description {
        overflow-wrap: break-word;
        font-family: 'Quicksand', sans-serif;
        font-size: 1vw;
        height: 100%;
        width: 100%;
        text-overflow: ellipsis;
    }

    .name {
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 2vw;
    }

    .points {
        text-align: center;
        margin: auto;
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 4vw;
    }
</style>