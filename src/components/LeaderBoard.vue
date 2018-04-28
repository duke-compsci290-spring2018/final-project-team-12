<template>
    <v-card>
        <v-list>
            <v-list-tile v-for="user in orderedUsers()" :key="user.name">

            </v-list-tile>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        name: "leader-board",
        props:[
            'db'
        ],
        data() {
            return{
                temp: {

                }
            }
        },
        methods: {
            orderedUsers() {
                var dumbUser = {
                    "email": "asdf@asdf.com",
                    "name": "John"
                }
                var toreturn = [];
                for(i = 0; i < 20; i++){
                    toreturn.push(dumbUser);
                }
                return toreturn;
            },
        }
    }
</script>

<style scoped>

</style>