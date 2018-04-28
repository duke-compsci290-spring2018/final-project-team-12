<template>
    <div>
        <v-layout row justify-center>
            <v-dialog value="true" persistent min-width="25vw" max-width="30vw" min-height="50vh">
                <v-card>
                    <v-container grid-list-lg>
                        <v-toolbar flat prominent color="transparent">
                            <v-spacer></v-spacer>
                            <span class="reg">Welcome to relay!</span>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-layout row justify-center>
                            <v-flex xs11>
                                <g-signin-button
                                        :params="startUp"
                                        @success="onSuccess"
                                        @error="onFail">
                                    Sign in with Google
                                </g-signin-button>
                            </v-flex>
                        </v-layout>
                        <v-layout row justify-center>
                            <v-toolbar flat color="transparent">
                                <v-spacer></v-spacer>
                                <span class="thin">or</span>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                        </v-layout>
                        <v-layout row justify-center>
                            <v-flex xs11>
                                <v-btn large block class="login" light color="white">
                                    Continue as guest
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {

            return {
                startUp: {
                    'apiKey': 'AIzaSyDZ3qbbsYsPvWV90w1SJd4z86zKAtsMAtE',
                    'client_id': '422071649995-4eorv459gegr16gf6dm0q1n0qorvlap8.apps.googleusercontent.com',
                    'scope': 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/user.emails.read https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me '
                }
            }
        },
        methods: {
            onSuccess(googleUser) {
                const BasicProfile2 = googleUser.getBasicProfile();
                const aa = BasicProfile2.getEmail();
                //const profile = googleUser;
                /* Returns
               gapi.auth2.BasicProfile 	You can retrieve the properties of gapi.auth2.BasicProfile with the following methods:

                BasicProfile.getId()
                BasicProfile.getName()
                BasicProfile.getGivenName()
                BasicProfile.getFamilyName()
                BasicProfile.getImageUrl()
                BasicProfile.getEmail()*/

                console.log('Internal');
                console.log(aa);
                this.$emit('user_profile', BasicProfile2);
            },
            onFail(err) {
                console.log('Failed to Login', err);
            }
        }
    }
</script>

<style scoped>

    .g-signin-button {
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        font-size: 25px;
        display: block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
    }

    span, .thin {
        font-family: 'Quicksand', sans-serif;
        font-size: 25px;
        color: #d0d0d0;
    }



    h3, .reg {
        font-family: 'Quicksand', sans-serif;
        font-size: 40px;
        color: #d0d0d0;
    }
</style>