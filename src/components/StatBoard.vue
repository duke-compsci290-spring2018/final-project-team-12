<template>
    <v-container grid-list-lg>
        <v-layout row justify-center>
            <v-flex xs6>
                <leader-board :ranking="ranking"></leader-board>
            </v-flex>
            <v-flex xs6>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import LeaderBoard from './LeaderBoard.vue';

    export default {
        name: "stat-board",
        props: ["user", "db", "cards"],
        data() {
            return {
                ranksRef: this.db.ref('rankings'),
                usersRef: this.db.ref('user'),
                ranking:{},
            }
        },
        methods: {
            logRank(){
                var updates = {};
                updates['/'] = this.ranking;
                this.ranksRef.update(updates);
            },
            buildRank(){
                console.log("reached");
                var parent = this;
                this.cards.forEach(function(card){
                    if(card.confirmed){
                            var points = card.points;
                        var user = card.claimer;
                        console.log("A card w/ " + points + " pts & claimed by: " + user.email);
                        var rankKey = user.name + " (" + user.email + ")";
                        if(parent.ranking[rankKey]!=null){
                            console.log("asdf");
                            parent.ranking[rankKey] += points;
                        }else{
                            parent.ranking[rankKey] = points;
                        }
                    }
                })
                console.log(this.ranking);
            }

        },
        components: {
            LeaderBoard
        },
        created() {
            console.log("db " + this.db);
            console.log("card " + this.cards);

            this.buildRank();
            // this.logRank();
        }
    }
</script>

<style scoped>

</style>