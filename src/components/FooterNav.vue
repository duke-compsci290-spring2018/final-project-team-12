<template>
    <v-bottom-nav
            color="grey darken-4"
            absolute
            shift
            :value="true"
            :active.sync="page"
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
    </v-bottom-nav>
</template>

<script>
    export default {
        name: "footer-nav",
        props: ["user"],
        data () {
            return {
                // user:this.user,
                page: 0
            }
        },
        computed:{

        },
        watch: {
            page: function(){
                console.log("page " + this.page);
                var toReturn;
                switch(this.page){
                    case 0:
                        toReturn="task";
                        break;
                    case 1:
                        toReturn="proposal";
                        break;
                    case 2:
                        toReturn="approval";
                        break;
                    case 3:
                        toReturn="stat";
                        break;
                }
                this.$emit("page_change", toReturn);
            }
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>