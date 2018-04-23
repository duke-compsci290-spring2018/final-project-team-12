<!--Component representing main dashboard/work board for -->
<!-- should take userID, vuefire reference, and filter cards based off of id-->
<template>
    <v-app dark>
        <v-card>
            <v-toolbar flat transparent>
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
    </v-app>
</template>

<script>
    import TaskCard from "./TaskCard.vue";
    export default {
        components:{
            TaskCard
        }
    }


</script>

<style scoped>
    .cardList {
        overflow-x: scroll;
    }
</style>