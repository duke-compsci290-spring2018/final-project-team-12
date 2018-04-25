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
                    <map-confirm></map-confirm>
                    <v-btn fab small color="grey lighten-1">
                        <v-icon color="white">
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
    import MapConfirm from "./MapConfirm.vue";
    export default {
        name: "task-confirm",
        components: {
            MapConfirm
        }
    }
</script>

<style scoped>

</style>