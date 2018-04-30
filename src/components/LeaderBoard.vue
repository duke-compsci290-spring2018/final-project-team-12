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
            }
        }
    }
</script>

<style scoped>

</style>