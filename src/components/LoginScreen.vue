<template>
  <div id="LoginScreen" ></div>
</template>

<script setup >

import {Assets, Container, Sprite, Texture, TilingSprite} from "pixi.js";
import {System} from "@/stores/System.ts";
import {designConfig} from "@/stores/game/designConfig.ts";
import {Screen} from "@/stores/Screen.ts";
import { onMounted} from "vue";
import {gsap} from "gsap";
import * as Pixi from "pixi.js";


/**数据*/
let cw = System().app.canvas.width;
let ch = System().app.canvas.height;
let w = System().app.screen.width;
let h = System().app.screen.height;




let LoginScreen = new Container();
LoginScreen.label = "loginScreen"
System().setCScreen(LoginScreen);
System().app.color = {color:0xFFF6CF};
//背景
const _background = new TilingSprite({
  texture: Texture.from('background-tile'),
  width: cw,
  height: ch,
  tileScale: {
    x: designConfig().backgroundTileScale,
    y: designConfig().backgroundTileScale,
  },
});
LoginScreen.addChild(_background);

//加载动画
const _spinner = Sprite.from('loading-circle');
_spinner.anchor.set(0.5);
LoginScreen.addChild(_spinner);

const whh = Sprite.from('loading-whh');
whh.anchor.set(0.5);
whh.scale.set(0.1);
whh.rotation = 5.5;
LoginScreen.addChild(whh);

//logo
const Logo = new Sprite({
  texture:Texture.from("logo"),
  anchor:0.5,
  scale:0.25,
})
LoginScreen.addChild(Logo);

const Progresss = new Pixi.Graphics();
let color = 0xFFFFFF;
Progresss.roundRect(100, 100, 100, 100, 16);
Progresss.fill({ color: color, alpha: 1 });
LoginScreen.addChild(Progresss);

onMounted(async () => {
  // Kill tweens of the screen container
  //gsap.killTweensOf(LoginScreen);

  // Reset screen data
  LoginScreen.alpha = 0;
  Logo.y = h+20;
  // Tween screen into being visible
   gsap.to(LoginScreen, {alpha: 1, duration: 0.5, ease: 'linear'});
   gsap.to(Logo , {
    y : h-55,
    duration: 0.5,
    ease:"linear"
  })
  await Assets.loadBundle(['start-screen']);
});
const Unmount = async ()=>{
  // Kill tweens of the screen container
  gsap.killTweensOf(this);
  // Hide pixi logo off screen
  gsap.to(Logo, {
    y: 100,
    duration: 0.3,
  });
  // Tween screen into being invisible
  await gsap.to(LoginScreen, {alpha: 0, delay: 0.1, duration: 0.2, ease: 'linear'});
  Screen().setScreen("StartScreen")
};

let dly = 0;
let frame = 0;
System().app.ticker.add((time) => {
  frame = frame+1;
  const delta = time.deltaTime;

  // Rotate spinner
  _spinner.rotation -= delta / 25;

  whh.rotation -= delta/25;

  if (System().initEnd){
    if (dly ===0){
      dly = frame;
    }
    if (frame-dly===120){
      Unmount()
    }

  }

});

System().Resize = ()=>{
  cw = System().app.canvas.width;
  ch = System().app.canvas.height;
  w = System().app.screen.width;
  h = System().app.screen.height;

  _background.width = cw;
  _background.height = ch;

  // Set visuals to their respective locations
  _spinner.x = whh.x =  w * 0.5;
  _spinner.y = whh.y = h * 0.5;

  Logo.x = w/2;
  Logo.y = h-55;
}
System().Resize();


</script>



<style scoped>

</style>