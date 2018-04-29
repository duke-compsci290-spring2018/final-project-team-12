<template>
    <v-dialog value="true" max-width="80vh">
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
                <v-card-text>
                    ASDF
                </v-card-text>
                <v-toolbar dense color="grey darken-5">
                    <v-toolbar-title>Confirm</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <map-confirm :db="this.db"></map-confirm>
                    <photo-confirm :db="this.db" :storageRef="this.storageRef"></photo-confirm>
                   

                </v-toolbar>
            </v-container>
            <v-toolbar color="grey lighten-3">
                <v-spacer></v-spacer>
                <v-btn large icon color="grey">
                    <v-icon color="white">
                        save
                    </v-icon>
                </v-btn>
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
    export default {
        name: "task-confirm",
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
            },
        }
    }
</script>

<style scoped>

</style>