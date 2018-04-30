<template>
    <v-container grid-list-lg>
        <v-card >
            <v-toolbar>
                <v-toolbar-title class="rankTitle">
                    Leaderboard
                </v-toolbar-title>
            </v-toolbar>
            <v-container grid-list-lg max-height="90vh" class="scroller">
                <v-layout row v-for="user in orderedRank()" :key="user">
                    <v-toolbar light>
                        <v-toolbar-title class="rankName">
                            {{user}}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-chip light disabled>
                            {{ranking[user]}}
                        </v-chip>
                    </v-toolbar>
                </v-layout>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "leader-board",
        props:[
            'ranking'
        ],
        data() {
            return{
                    
            }
        },
        methods: {
            orderedRank() {
                var newRank = {};
                var parent = this;
                Object.keys(this.ranking).sort().forEach(function(key) {
                    newRank[key] = parent.ranking[key];
                });
                console.log(Object.keys(newRank));
                return Object.keys(newRank);
            }
        }
    }
</script>

<style scoped>
    .rankName {
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 20px;
    }

    .rankTitle {
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 30px;
    }

    .scroller {
        overflow-y: scroll;
    }
</style>