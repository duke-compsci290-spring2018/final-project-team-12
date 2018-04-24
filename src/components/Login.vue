<template>
    <v-app>
        <v-layout row justify-center>
            <v-dialog value="true" persistent max-width="50vh">
                <v-card>
                    <v-toolbar flat color="transparent">
                        <v-spacer></v-spacer>
                        <span>Welcome to relay!</span>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <!--<v-card-actions>-->
                    <v-container grid-list-md>
                        <v-layout row-wrap justify-center>
                            <v-flex xs12>
                                <v-btn large class="login" light color="white" min-width="200px">
                                            <img src="assets/g.png" alt="google logo" width="200px" height="48px">
                                </v-btn>
                            </v-flex>
                            <v-flex xs12>
                                <v-card-text> OR </v-card-text>
                            </v-flex>

                        <v-btn large class="login" light color="white">
                            Continue as guest
                        </v-btn>
                        </v-layout>
                    </v-container>
                    <!--</v-card-actions>-->
                </v-card>
            </v-dialog>
        </v-layout>

    </v-app>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    span {
        font-family: 'Quicksand', sans-serif;
        font-size: 35px;
        color: #d0d0d0;
    }
</style>