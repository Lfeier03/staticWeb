<template>
  <div id="StartScreen" >

  </div>
</template>

<script setup>
import {Container,Sprite, Texture, TilingSprite} from "pixi.js";
import {System} from "@/stores/System.ts";
import {onBeforeUnmount, onMounted} from "vue";
import {designConfig} from "@/stores/game/designConfig.ts";


let cw = System().app.canvas.width;
let ch = System().app.canvas.height;
// eslint-disable-next-line no-unused-vars
let w = System().app.screen.width;
// eslint-disable-next-line no-unused-vars
let h = System().app.screen.height;

const StartScreen = new Container();
StartScreen.label = "startScreen"

// eslint-disable-next-line no-unused-vars
const _topAnimContainer = new Container();
// eslint-disable-next-line no-unused-vars
const _midAnimContainer = new Container();
// eslint-disable-next-line no-unused-vars
const _bottomAnimContainer = new Container();



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
StartScreen.addChild(_background);

/**元素*/
const Logo = new Sprite({
  texture:Texture.from("logo"),
  anchor:0.5,
  scale:0.2,
})
_bottomAnimContainer.addChild(Logo);

const titleTop = new Sprite({
  texture :Texture.from("start-title"),
  anchor:0.5,
  scale:0.26,
});
_topAnimContainer.addChild(titleTop);

const start = new Sprite({
  texture :Texture.from("start-up"),
  scale:0.55,
});
start.anchor.set(0.5 , 1);
start.cursor = 'pointer';
start.interactive = true;
start.on("pointerdown" , ()=>{
  start.texture = Texture.from("start-down")
  start1.y = h-248;
});
start.on("pointerup" , ()=>{
  start.texture = Texture.from("start-up")
  start1.y = h-265;
});
_midAnimContainer.addChild(start);

const start1 = new Sprite({
  texture:Texture.from("start"),
  scale:0.2,
  anchor:0.5,
});
_midAnimContainer.addChild(start1);

// eslint-disable-next-line no-unused-vars






/**悬窗*/
let window = new Container();
const _portView = new Container();
/** Color of the frame. */
//const frameColor= 0x767676;
/** Width of the outer frame. */
//const frameWidth = 10;
/** Size of the entire view. */
const size= 60;

/*const _frame = new Graphics();
_frame.circle(0, 0, size + frameWidth) // draw the frame as a circle
_frame.fill({ color: frameColor }); // fill the drawn circle with the frame color
window.addChild(_frame);*/

// Create the tiling sprite for the background
const _background1 = new TilingSprite({
  texture: Texture.from('background-tile-space'),
  width: 64,
  height: 64,
  anchor: { x: 0.5, y: 0.5 },
});

// Set the width and height of the background to be equal to the size of the porthole
_background1.width = _background1.height = size * 2;
_portView.addChild(_background1);




window.addChild(_portView);
// eslint-disable-next-line no-unused-vars
console.log(window);
_midAnimContainer.addChild(window);
console.log(_midAnimContainer);


StartScreen.addChild(_topAnimContainer);
StartScreen.addChild(_midAnimContainer);
StartScreen.addChild(_bottomAnimContainer);


System().setCScreen(StartScreen);

onMounted(() => {

});
onBeforeUnmount(() => {

})

// eslint-disable-next-line no-unused-vars
System().app.ticker.add((time) => {


});

System().Resize = ()=>{
  cw = System().app.canvas.width;
  ch = System().app.canvas.height;
  w = System().app.screen.width;
  h = System().app.screen.height;

  _background.width = cw;
  _background.height = ch;

  Logo.x = 80;
  Logo.y = h-40;

  titleTop.x = w/2;
  titleTop.y = 200;

  start.x = w/2;
  start.y = h-200;
  start1.x = w/2;
  start1.y = h-265;
}
System().Resize();

</script>



<style scoped>


</style>