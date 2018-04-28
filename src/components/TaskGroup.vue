<!--Component representing main dashboard/work board for -->
<!-- should take userID, vuefire reference, and filter cards based off of id-->
<template>
        <v-card class="taskGroup" light>
            <v-toolbar light flat transparent>
                <v-toolbar-title>
                    Some User's Tasks
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn icon>
                        <v-icon>

                        </v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-container grid-list-md>
                <v-layout class="cardList" row>

                </v-layout>
            </v-container>
        </v-card>
</template>

<script>
    import TaskCard from "./TaskCard.vue";
    export default {
        components:{
            TaskCard
        },
        props:['user', 'cards'],
        methods: {
            filterCards(){
                if(this.user == null){
                    return this.cards;
                }else{
                    // return this.cards.filter(card => card.users
                }
            }
        }
    }


</script>

<style scoped>
    .taskGroup {
        max-height: 45vh;
    }

    .cardList {
        overflow-x: scroll;
    }
</style>