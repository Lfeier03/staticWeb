import { Container, Text } from 'pixi.js';
import {ref} from "vue";
import {defineStore} from "pinia";


export const Title = defineStore("Title" , ()=>{
    const view = ref(new Container());
    function init(){
        // Add top part of the title
        const bubboText = "BUBBO";

        const topWrapper = new Container();
        const titleTop = new Text({
            text: bubboText,
            style: {
                fontSize: 90,
                fontWeight: '900',
                fontFamily: 'Bungee Regular',
            },
        });

        titleTop.anchor.set(0.5);
        topWrapper.addChild(titleTop);
        view.value.addChild(topWrapper);

        // Assign a random type to the top title's bubble
        /*const bubbleTop = new BubbleView(randomType());

        bubbleTop.view.position.set(titleTop.width * 0.5 - 33.5, 7);
        bubbleTop.view.scale.set(1.6);
        topWrapper.addChild(bubbleTop.view);*/

        const bottomWrapper = new Container();
        // Add bottom part of the title
        const titleBottom = new Text({
            text: bubboText,
            style: {
                fontSize: 90,
                fontWeight: '900',
                fontFamily: 'Bungee Regular',
            },
        });

        bottomWrapper.y = titleTop.height - 20;

        titleBottom.anchor.set(0.5);
        bottomWrapper.addChild(titleBottom);
        view.value.addChild(bottomWrapper);

        // Assign a random type to the bottom title's bubble
        /*const bubbleBottom = new BubbleView(randomType());

        bubbleBottom.view.position.set(titleBottom.width * 0.5 - 33.5, 7);
        bubbleBottom.view.scale.set(1.6);
        bottomWrapper.addChild(bubbleBottom.view);*/

        // Create sub header
        const subtitle = new Text({
            text: "DOWM MATCH",
            style: {
                fontSize: 32,
                fontWeight: '900',
                fontFamily: 'Bungee Regular',
            },
        });

        subtitle.anchor.set(0.5);
        subtitle.y = bottomWrapper.y + bottomWrapper.height - 30;
        view.value.addChild(subtitle);
    }

    return {
        view,
        init,
    };
});