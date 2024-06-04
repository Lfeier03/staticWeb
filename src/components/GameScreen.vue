<template>
  <div id="GameScreen" ></div>
</template>

<script setup>
import {Container} from "pixi.js";
import {System} from "@/stores/System.ts";
import {onBeforeUnmount, onMounted} from "vue";

const GameScreen = new Container();
GameScreen.label = "GameScreen"
System().setCScreen(GameScreen);


onMounted(() => {

});

onBeforeUnmount(() => {

})

// eslint-disable-next-line no-unused-vars
System().app.ticker.add((time) => {


});

System().Resize = ()=>{

}
System().Resize();

</script>

<style scoped>

</style>