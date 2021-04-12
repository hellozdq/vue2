<template>
    <div>
        <div>{{name}}</div>
        <div><button @click="setStoreName('123')">按钮</button></div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
    name:"APP",
    data(){
        return {

        }
    },
    // computed:{
    //     name(){     
    //         return this.$store.state.app.name;
    //     } 
    // },
    computed: {
        ...mapState('app',[
            'name'
        ]),
    },   
    methods: {
        ...mapActions('app',['setName']),
        // setStoreName(name){
        //     console.log("================")
        //     this.$store.dispatch("app/setName",name);
        // }
        setStoreName(name){
            this.setName(name)
        }
    },
}
</script>