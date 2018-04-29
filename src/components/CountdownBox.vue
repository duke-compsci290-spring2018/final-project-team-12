<template>
    <v-card light>
        <v-toolbar dense flat>
            <v-spacer></v-spacer>
            <v-toolbar-title class="subDashTitle">
                Time Left in this Relay
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row justify-center>
            <Countdown end="August 22, 2022"></Countdown>
        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "countdown-box"
    }
</script>

<style scoped>

</style>