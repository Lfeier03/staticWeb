import {ref} from "vue";
import {defineStore} from "pinia";


export const Screen = defineStore("Screen" , ()=>{
    const Route = ref("default");

    function setScreen(Screen){

        Route.value = Screen;
    }

    return {
        Route,
        setScreen,
    };
});
