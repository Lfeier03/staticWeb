import {designConfig} from "./game/designConfig.ts";
import {assets} from "./assets.ts";
// @ts-ignore
import {Application, Container} from 'pixi.js';
import {defineStore} from "pinia";
import {ref} from "vue";
import {Screen} from "./Screen.ts";

export const System = defineStore("System" , ()=>{
    /**pixi程序*/
    const app = ref(new Application());
    const CScreen = ref(new Container()) ;
    const Resize = ref(()=>{});
    const initEnd = ref(false);
    CScreen.value.label = "空";
    async function init(){
        await app.value.init({
            resolution: Math.max(window.devicePixelRatio, 2),
            backgroundColor: 0xffffff,
        });

        // Add pixi canvas element to the document's body
        document.getElementById("init").appendChild(app.value.canvas);
        // @ts-ignore
        app.value.stage.addChild(CScreen.value);
        // 每当窗口调整大小时，调用`  AdaptationScreen `函数
        window.addEventListener('resize', AdaptationScreen);

        AdaptationScreen();

        // 设置资源包(见assets.ts)并在后台开始加载所有资源
        await assets().initAssets();
        // 指定通用加载界面
        Screen().setScreen("LoginScreen");
    }

    function AdaptationScreen(){
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const minWidth = designConfig().minwidth;
        const minHeight = designConfig().minheight;

        // 根据当前尺寸计算渲染器和画布大小
        const scaleX = windowWidth < minWidth ? minWidth / windowWidth : 1;
        const scaleY = windowHeight < minHeight ? minHeight / windowHeight : 1;
        // eslint-disable-next-line no-unused-vars
        const scale = scaleX > scaleY ? scaleX : scaleY;
        const width = windowWidth * scale;
        const height = windowHeight * scale;

        /**画布尺寸*/
        app.value.renderer.canvas.style.width = `${windowWidth}px`;
        app.value.renderer.canvas.style.height = `${windowHeight}px`;
        /**实际渲染尺寸*/
        app.value.renderer.resize(width , height);
        window.scrollTo(0, 0);

        // 尺寸调整函数
        /* navigation().init();
         navigation().resize(width, height);*/
        Resize.value();
    }

    function setCScreen(Screen){
        CScreen.value = Screen;
        // @ts-ignore
        app.value.stage.addChild(CScreen.value);
    }

    return{
        app,
        init,
        CScreen,
        setCScreen,
        Resize,
        initEnd,
    }
});