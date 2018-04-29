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
                        <v-card-actions>
                            <v-layout justify-center row>
                                <v-flex xs6>
                                    <v-btn @click="voteYes()" block v-bind:disabled="voted()" medium color="green darken-2">
                                        <v-icon left dark>done</v-icon>
                                        {{yes.length}}
                                    </v-btn>
                                </v-flex>

                                <v-flex xs6>
                                    <v-btn @click="voteNo()" block v-bind:disabled="voted()" medium color="red darken-2">
                                        <v-icon left dark>block</v-icon>
                                        {{no.length}}
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs5>
                    <v-toolbar dense color="white">
                        <v-spacer></v-spacer>
                        <v-chip disabled outline small>
                            {{cardJson.due}}
                        </v-chip>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card flat height="100%" tile light>
                        <v-card-text class="description">
                            {{cardJson.description}}
                        </v-card-text>
                        <v-toolbar flat dense color="grey lighten-3">
                            <v-spacer></v-spacer>
                            <v-icon v-if="cardJson.confirmationMethods.location!=null && cardJson.confirmationMethods.location!=false" small color="grey darken-2">
                                my_location
                            </v-icon>
                            <v-spacer></v-spacer>
                            <v-icon v-if="cardJson.confirmationMethods.image!=null && cardJson.confirmationMethods.image!=false" small color="grey darken-2">
                                add_a_photo
                            </v-icon>
                            <v-spacer></v-spacer>
                            <v-icon v-if="cardJson.confirmationMethods.text!=null && cardJson.confirmationMethods.text!=false" small color="grey darken-2">
                                comment
                            </v-icon>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "proposal-card",
        props: ["cardJson", "user", "cardsRef"],
        data() {
            return {
                hasVoted: false,
                yes: [],
                no: []
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
                    if(name=="noVotes"){
                        parent.no=votes;
                    }
                    if(name=="yesVotes"){
                        parent.yes=votes;
                    }
                    return votes;
                });
            },
            getNoVotes(){
                this.getVotes('noVotes');
                console.log(this.no);
            },
            getYesVotes(){
                this.getVotes('yesVotes');
                console.log(this.yes);
            },
            canYesVote(){;
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
                this.$emit('proposal_yes', true);
            },
            voteNo(){
                this.hasVoted=true;
                this.no.push(this.user.email);
                this.$emit('proposal_no', true);
            },
            voted(){
                return !(this.canYesVote() && this.canNoVote());
            }
        },
        created() {
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