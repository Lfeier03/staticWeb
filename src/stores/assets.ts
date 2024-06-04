import {defineStore} from "pinia";

// @ts-ignore
import {Assets} from "pixi.js";
import {System} from "./System.ts";

const TextureBundles = {
    bundles: [
        {
            name: 'load-screen',
            assets: [
                {
                    alias: 'loading-circle',
                    src: './property/LoginScreen/loading-circle.png',
                },
                {
                    alias: 'loading-whh',
                    src: './property/LoginScreen/whh.png',
                },
            ],

        },
        {
            name: 'start-screen',
            assets: [
                {
                    alias: 'start-title',
                    src: './property/StartScreen/title.png',
                },
                {
                    alias: 'start-down',
                    src: './property/StartScreen/play-btn-down.png',
                },
                {
                    alias: 'start-up',
                    src: './property/StartScreen/play-btn-up.png',
                },
                {
                    alias: 'start',
                    src: './property/StartScreen/start.png',
                },
            ],
        },
        {
            name: 'default',
            assets: [
                {
                    alias: 'background-tile',
                    src: './property/public/background-tile.png',
                },
                {
                    alias: 'background-tile-space',
                    src: './property/public/background-tile-space.png',
                },
                {
                    alias: 'logo',
                    src: './property/public/whhlogo.png',
                },
            ],
        },
    ],
}
export const assets = defineStore("assets" , ()=>{
    /**初始化并启动所有资源的后台加载*/
    async function initAssets(){
        //使用此资产清单文件初始化PixiJS资源
        await Assets.init({ manifest: TextureBundles });
        //加载资源页面  优先加载游戏加载界面资源
        await Assets.loadBundle(['load-screen', 'default']);
        // 罗列所有资源包
        const allBundles = TextureBundles.bundles.map((item) => item.name);
        try {
            // 等待资源包加载完成
            await Assets.backgroundLoadBundle(allBundles);
            System().initEnd = true;
            // 资源包加载完成后打印信息
            console.log('资源包加载完成！');
        } catch (error) {
            // 如果加载过程中发生错误，打印错误信息
            console.error('资源包加载失败:', error);
        }

    }


    return{
        initAssets,
    }
});