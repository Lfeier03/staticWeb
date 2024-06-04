import {defineStore} from "pinia";
import {ref} from "vue";

/** 在缩放功能缩小视图之前的最小屏幕宽度。 */
const minWidth = 428;
/** 在缩放功能缩小视图之前的最小屏幕高度。 */
const minHeight = 925;

export const designConfig = defineStore("designConfig" , ()=>{
    const minwidth= ref(minWidth);
    const minheight= ref(minHeight);

    /** 使能够看到气泡的碰撞体。 */
    const debugBody= ref(false);
    /** 每个屏幕中发现的背景元素的平铺比例。 */
    const backgroundTileScale= ref(2);
    /** 防止背景装饰视觉效果离屏幕太近。 */
    const decorEdgePadding= ref(100);
    /** 防止背景装饰视觉效果刷出太近。 */
    const decorMinDistance= ref(150);
    /** 允许在桌面上创建多少背景装饰视觉效果。 */
    const decorCountDesktop= ref(6);
    /** 允许在移动设备上创造多少背景装饰视觉效果。 */
    const decorCountMobile= ref(3);
    /** 用于将用户重定向到open games github页面的url*/
    const forkMeURL= ref('https=//github.com/pixijs/open-games');
    /** Tile scale for the public elements found in each screen. */
    return{
        minwidth,
        minheight,
        debugBody,
        backgroundTileScale,
        decorEdgePadding,
        decorMinDistance,
        decorCountDesktop,
        decorCountMobile,
        forkMeURL,

    }
});