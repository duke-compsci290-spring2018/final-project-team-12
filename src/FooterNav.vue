<template>
    <v-bottom-nav
        absolute
        shift
        :value="true"
        :active.sync="e2"
        color="color"
    >
        <v-btn dark>
            <span>Tasks</span>
            <v-icon>list</v-icon>
        </v-btn>
        <v-btn dark>
            <span>Proposals</span>
            <v-icon>create</v-icon>
        </v-btn>
        <v-btn dark>
            <span>Approve</span>
            <v-icon>thumbs_up_down</v-icon>
        </v-btn>
        <v-btn dark>
            <span>Stats</span>
            <v-icon>trending_up</v-icon>
        </v-btn>
        <v-btn dark v-if="user.admin">
            <span>Master Control</span>
            <v-icon>build</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>

<script>
    export default {
        name: "footer-nav",
        props: ["user"],
        data () {

        },
        computed:{
            color () {
                switch (this.e2) {
                    case 0:
                        return 'blue-grey'
                    case 1:
                        return 'teal'
                    case 2:
                        return 'brown'
                    case 3:
                        return 'indigo'
                }
            }
        }
    }
</script>

<style scoped>

</style>