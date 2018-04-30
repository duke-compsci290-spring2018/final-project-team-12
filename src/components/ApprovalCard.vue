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
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>

            <v-layout justify-center row>
                <v-menu v-if="confirm.location!=null" origin="center center" top top offset-y
                        :close-on-content-click=false>
                    <v-btn fab small color="grey lighten-1" slot="activator" @click="">
                        <v-icon color="black">
                            my_location
                        </v-icon>
                    </v-btn>
                    <v-card max-width="60vh" light>
                        <v-container grid-list-md fluid>
                            <v-flex xs9>
                                <gmap-map
                                        :center="confirm.location"
                                        :zoom="11"
                                        style="height:40vh; width:80vw"
                                >
                                    <gmap-marker
                                            :position="confirm.location"
                                            :clickable="true"
                                            :draggable="false"
                                            @click=""
                                    ></gmap-marker>


                                    <gmap-circle
                                            ref="circle"
                                            :editable="false"
                                            :center="{lat:parseFloat(cLocation.location.x),
                                                      lng:parseFloat(cLocation.location.y)}"
                                            :draggable="false"
                                            :radius=1000
                                            :options="{strokeColor: '#011AC7',
                                                       strokeOpacity: 0.8,
                                                       strokeWeight: 1,
                                                       fillColor: '#011AC7',
                                                       fillOpacity: 0.3}"
                                    />


                                </gmap-map>
                                <gmap-street-view-panorama
                                        :position="confirm.location"
                                        ref="pano"
                                        @position_changed=""
                                        style="height:30vh;width:80vw">
                                </gmap-street-view-panorama>
                            </v-flex>
                        </v-container>
                    </v-card>
                </v-menu>

                <v-menu v-if="!(confirm.image==null)" origin="center center" top top offset-y
                        :close-on-content-click=false>
                    <v-btn fab small color="grey lighten-1" slot="activator">
                        <v-icon color="black">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                    <v-card max-width="60vh" light>
                        <v-container grid-list-md fluid>
                            <img :src="confirm.image" alt="confirmation image">
                        </v-container>
                    </v-card>
                </v-menu>


                <v-menu v-if="confirm.text" origin="center center" top top offset-y :close-on-content-click=false>
                    <v-btn fab small color="grey lighten-1" slot="activator">
                        <v-icon color="black">
                            comment
                        </v-icon>
                    </v-btn>
                    <v-card max-width="60vh" light>
                        <v-container grid-list-md fluid>
                            <v-card-text class="points">
                                {{confirm.text}}
                            </v-card-text>
                        </v-container>
                    </v-card>
                </v-menu>
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
            'cardsRef',
            'usersRef',
            'db'
        ],
        data() {
            return {
                hasVoted: false,
                yes: [],
                no: [],
                showMap: false,
                showImage: false,
                showComment: false,
                cLocation: {},
                eLocation: [],
                confirm: {},
                img: '',
                text: 'N/A'
            }
        },
        methods: {
            getConfirmMethods: function () {
                console.log("ZZZ");
                var cmRef = this.cardsRef.child(this.cardJson['.key']).child('confirmation');
                var parent = this;
                console.log(cmRef);
                return cmRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                    console.log(val);
                    if (val != null) {
                        parent.confirm = Object.assign({}, val);
                    }
                });
            },
            getConfirmMethods2: function () {
                console.log("222");
                var cmRef = this.cardsRef.child(this.cardJson['.key']).child('confirmationMethods');
                var parent = this;
                console.log(cmRef);
                return cmRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                    console.log(val);
                    if (val != null) {
                        parent.cLocation = Object.assign({}, val);
                    }
                });
            },
            loadText: function (txt) {
                this.text = txt;
            },
            loadImage: function (uri) {
                this.image = uri;
            },
            loadLocation: function (loc) {
                this.location = loc;
            },

            getVotes(name) {
                var votesRef = this.cardsRef.child(this.cardJson['.key']).child(name);
                var votes = [];
                var parent = this;
                return votesRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                    if (val != null) {
                        votes = Object.values(val);
                    }
                }).then(function () {
                    if (name == "noConfirm") {
                        parent.no = votes;
                    }
                    if (name == "yesConfirm") {
                        parent.yes = votes;
                    }
                    return votes;
                });
            },

            getEvidence() {
                var vm = this;
                var temp = [];
                console.log("START");
                var confirmationRef = this.cardsRef.child(this.cardJson['.key']).child('confirmationMethods').child('location');
                console.log(confirmationRef);

                return confirmationRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                    temp = Object.values(val);
                    vm.cLocation = Object.assign({}, val);

                })
            },
            getEvidence2() {
                console.log("Start2");
                var confirmationRef = this.cardsRef.child(this.cardJson['.key']).child('confirmation').child('location');
                console.log(confirmationRef);
                var vm = this;
                var temp = [];
                return confirmationRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                    temp = Object.values(val);


                }).then(function () {
                    vm.eLocation = temp;
                    console.log(vm.eLocation);

                });

            },
            getEvidence3() {
                var confirmationRef = this.cardsRef.child(this.cardJson['.key']).child('confirmation');
                console.log(confirmationRef);
                var vm = this;
                var temp = [];
                return confirmationRef.once('value', function (snapshot) {
                    var val = snapshot.val();
                    temp = Object.values(val);


                }).then(function () {
                    vm.confirmation = temp;
                    console.log(vm.confirmation);
                    console.log(vm.confirmation[0]);

                });

            },
            getImg() {
                this.img = this.confirmation[0];
                console.log(this.confirmation[0]);
                console.log(this.img);
                return this.confirmation[0];
            },
            getNoVotes() {
                this.getVotes('noConfirm');
                console.log(this.no);
            },
            getYesVotes() {
                this.getVotes('yesConfirm');
                console.log(this.yes);

                var vm = this;
                var cRef = this.cardsRef.child(this.cardJson['.key']);
                return cRef.once('value', function (snapshot) {
                    vm.CARD = snapshot.val();
                });
                console.log("CARD")
                console.log(vm.CARD);
            },
            canYesVote() {
                if (this.yes.indexOf(this.user.email) < 0) {
                    return true;
                }
                return false;
            },
            canNoVote() {
                if (this.no.indexOf(this.user.email) < 0) {
                    return true;
                }
                return false;
            },
            voteYes() {
                this.vote('yesConfirm', this.yes);
            },
            voteNo() {
                this.vote('noConfirm', this.no);
            },
            vote(name, voteList) {
                this.hasVoted = true;
                voteList.push(this.user.email);
                this.cardsRef.child(this.cardJson['.key']).child(name).push(this.user.email);
                this.approveOrRemove();
            },
            approveOrRemove() {
                console.log("here");
                var yesVotes = this.yes.length;
                var noVotes = this.no.length;
                var numUsers = 4 * (yesVotes + noVotes);
                var parent = this;

                console.log("HIHI " + this.usersRef);

                this.usersRef.once('value', function (snapshot) {
                    var users = snapshot.val();
                    numUsers = Object.values(users).length;
                    console.log(numUsers);
                }).then(function () {
                    var updates = {};
                    if (yesVotes > numUsers / 2) {
                        console.log("attempted to buy a filet 'o fish from micky d's");
                        updates['/' + parent.cardJson['.key'] + '/confirmed'] = true;
                    } else if (noVotes > numUsers / 2) {
                        console.log("attempted to remove");
                        updates['/' + parent.cardJson['.key'] + '/approved'] = true;
                        updates['/' + parent.cardJson['.key'] + '/confirmation/location'] = null;
                        updates['/' + parent.cardJson['.key'] + '/confirmation/text'] = null;
                        updates['/' + parent.cardJson['.key'] + '/confirmation/image'] = null;
                        updates['/' + parent.cardJson['.key'] + '/claimer'] = null;
                        updates['/' + parent.cardJson['.key'] + '/claimed'] = false;
                        updates['/' + parent.cardJson['.key'] + '/dateCompleted'] = null;
                    }
                    parent.cardsRef.update(updates);
                });
            },
            voted() {
                return !(this.canYesVote() && this.canNoVote());
            }
        },
        created() {

            this.getConfirmMethods();
            this.getConfirmMethods2();
            //this.getEvidence();
            /* this.getYesVotes();
             this.getNoVotes();

             this.getEvidence2();
             this.getEvidence3();*/

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