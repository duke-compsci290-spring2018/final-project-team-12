<template>
    <v-app>

    </v-app>
</template>

<script>
    export default {
        name: "task-card",
        props: ["cardJson"],
        data(){
            return{
                color: cardJson.color,
                title: cardJson.title,
                points: cardJson.points,
                description: cardJson.description
            }
        }
    }
</script>

<style scoped>

</style>