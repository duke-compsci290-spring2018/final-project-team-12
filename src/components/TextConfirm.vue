<template>
    <v-menu origin="center center" top top offset-y v-model="visibility" :close-on-content-click=false>
        <v-btn fab small color="grey lighten-1" slot="activator">
            <v-icon color="white">
                comment
            </v-icon>
        </v-btn>
        <v-card light>
            <v-container grid-list-lg fluid>
                <v-text-field light textarea label="Confirmation explanation" v-model="userText">
                </v-text-field>
                <v-btn @click="$emit('get_text', userText); visibility=false;" large icon color="red">
                    <v-icon color="white">
                        check
                    </v-icon>
                </v-btn>
            </v-container>
        </v-card>
    </v-menu>
</template>

<script>
    export default {
        name: "text-confirm",
        data() {
            return {
                userText: null,
                visibility: true
            }
        },
        created() {
            userText: null
        }
    }
</script>

<style scoped>

</style>