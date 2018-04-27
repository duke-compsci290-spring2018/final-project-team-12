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
                    <v-toolbar-title>Choose confirmations methods: </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <map-create></map-create>
                    <v-btn depressed fab small color="grey lighten-2">
                        <v-icon color="grey">
                            add_a_photo
                        </v-icon>
                    </v-btn>
                </v-toolbar>
            </v-container>
            <v-toolbar color="grey lighten-3">
                <v-spacer></v-spacer>
                <v-btn large icon color="grey">
                    <v-icon color="white">
                        save
                    </v-icon>
                </v-btn>
                <v-btn large icon color="red">
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

    import MapCreate from "./MapCreate.vue";
    export default {
        name: "task-create",
        components: {
            MapCreate
        }
    }
</script>

<style scoped>

</style>