<template>
    <!--<v-bottom-nav-->
        <!--absolute-->
        <!--shift-->
        <!--:value="true"-->
        <!--:active.sync="e2"-->
        <!--:color="color"-->
    <!--&gt;-->
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
        <v-btn dark v-if="user!=null">
            <span>Proposals</span>
            <v-icon>create</v-icon>
        </v-btn>
        <v-btn dark v-if="user!=null">
            <span>Approve</span>
            <v-icon>thumbs_up_down</v-icon>
        </v-btn>
        <v-btn dark>
            <span>Stats</span>
            <v-icon>trending_up</v-icon>
        </v-btn>
        <v-btn dark v-if="user!=null && user.admin">
            <span>Admin Dashboard</span>
            <v-icon>build</v-icon>
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
            // color () {
            //     switch (this.e2) {
            //         case 0:
            //             return 'grey darken-4'
            //         case 1:
            //             return 'teal'
            //         case 2:
            //             return 'brown'
            //         case 3:
            //             return 'indigo'
            //     }
            // }

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
                    case 4:
                        toReturn="admin";
                        break;
                }
                if(this.user==undefined && toReturn=="proposal"){
                    toReturn = "stat";
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