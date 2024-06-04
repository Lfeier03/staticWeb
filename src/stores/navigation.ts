import {defineStore} from "pinia";



/** 当前显示的屏幕 */
const currentScreen = null;
/** 正在显示的当前覆盖层 */
const currentOverlay = null;
/** 屏幕的宽度 */
// eslint-disable-next-line no-unused-vars
let _w = null;
/** 屏幕的高度 */
// eslint-disable-next-line no-unused-vars
let _h = null;

export const navigation = defineStore("navigation" , ()=>{

    function init() {
       // app.stage.addChild(screenView, overlayView);
    }
    /**
     * 设置默认的加载界面。
     * @param Ctor—加载页面的构造函数。
     * */
   /* function setLoadScreen(Ctor) {
        loadScreen = _getScreen(Ctor);
    }*/
    /**
     * 每次屏幕缩放时都会被调用。
     * 将屏幕宽度和高度转发到当前屏幕并覆盖。
     * @param w—屏幕的宽度。
     * @param h—屏幕的高度。
     */
    function resize(w, h) {
        _w = w;
        _h = h;
        currentScreen?.resize?.(w, h);
        currentOverlay?.resize?.(w, h);
    }

    return{
        init,
        resize,

    }
});