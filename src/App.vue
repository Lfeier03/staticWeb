<template>
  <div id="init" ></div>
  <router-view :name="Screen().Route"> </router-view>
</template>

<script setup>
import {RouterView, useRouter} from 'vue-router'
import {onMounted} from "vue"
import {Screen} from "@/stores/Screen.ts";

const router = useRouter();


//页面挂在后执行  基本处于页面加赞完成后执行
onMounted(() => {
  router.push("/");
  /*document.addEventListener('mousemove', function(event) {
    const x = event.clientX; // 获取鼠标光标相对于浏览器窗口的X坐标
    const y = event.clientY; // 获取鼠标光标相对于浏览器窗口的Y坐标
    console.log('Mouse position: X = ' + x + ', Y = ' + y);
  });*/


});



</script>

<style>

</style>