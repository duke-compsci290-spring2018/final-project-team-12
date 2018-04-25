<template>
<div>
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
                                <g-signin-button
                                                 :params="startUp"
                                                 @success="onSuccess"
                                                 @error="onFail">
                                    Sign in with Google
    </g-signin-button>
                                <!--<v-btn large class="login" light color="white" min-width="200px">
<img src="assets/g.png" alt="google logo" width="200px" height="48px">
    </v-btn>-->

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
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                startUp:{
                    'apiKey': 'AIzaSyDZ3qbbsYsPvWV90w1SJd4z86zKAtsMAtE',
                    'client_id': '422071649995-4eorv459gegr16gf6dm0q1n0qorvlap8.apps.googleusercontent.com',
                    'scope': 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/user.emails.read https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/plus.me '
                }
            }
        },
        methods:{
            onSuccess(googleUser){
                const BasicProfile = googleUser.getBasicProfile();
                const aa = BasicProfile.getEmail();
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
                this.$emit('user_profile', BasicProfile);
            },
            onFail(err){
                console.log('Failed to Login',err);
            }
        }
    }
</script>

<style scoped>
    .g-signin-button {
        /* This is where you control how the button looks. Be creative! */
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
    }
    span {
        font-family: 'Quicksand', sans-serif;
        font-size: 35px;
        color: #d0d0d0;
    }
</style>