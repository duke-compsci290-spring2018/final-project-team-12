<template>
<v-card dark height="50vh" min-width="800px">
    <v-container height="50vh"fluid grid-list-md>
        <v-layout row>
            <v-flex xs12>
                <v-card tile height="100%" flat dark>
                    <v-toolbar color="transparent" flat>
                        <v-toolbar-title class="name">Proposal Name</v-toolbar-title>
    </v-toolbar>
                    <v-card-text class="points">
                        80 pts
    </v-card-text>
                    <v-layout justify-center row>
    <v-flex xs6>
        <v-btn @click="" block medium color="green darken-2">
                        
                        <v-icon  dark>done</v-icon>
    </v-btn>
    </v-flex>
                        
    <v-flex xs6>
          <v-btn @click="" block medium color="red darken-2">
                    
                        <v-icon dark>block</v-icon>
    </v-btn>
    </v-flex>
    </v-layout>
                    
  
    </v-card>
    </v-flex>
            <v-flex xs5>
                <v-card flat height="100%" tile light>
                    <v-toolbar dense flat color="transparent">
                        <v-spacer>
    </v-spacer>
                        <v-chip disabled outline small>
                            08-02-2012
    </v-chip>
                        <v-spacer>
    </v-spacer>
    </v-toolbar>
                    <v-card-text class="description">
                        Proposal Description, says what task actually is
                       
                        <v-spacer></v-spacer>
                    
                        <v-toolbar color="grey lighten-3">
               
                
                    <v-icon small color="black">
                        my_location
                    </v-icon>
               <v-spacer></v-spacer>
                
                    <v-icon small color="black">
                        add_a_photo
                    </v-icon>
               
            </v-toolbar>
                        
                        
                        
                              
    </v-card-text>
                    

    </v-card>
    </v-flex>
    </v-layout>
    </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "proposal-card",
        props: ["cardJson"],
        data() {
            return {
                cards:[]
            }
        },
    }
</script>

<style scoped>
    .description {
        overflow-wrap: break-word;
        font-family: 'Quicksand', sans-serif;
        font-size: 1vw;
        height: 100%;
        width: 100%;
        text-overflow: ellipsis;
    }

    .name {
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 2vw;
    }

    .points {
        text-align: center;
        margin: auto;
        overflow-wrap: normal;
        font-family: 'Quicksand', sans-serif;
        font-size: 4vw;
    }
</style>