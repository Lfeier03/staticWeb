import {defineStore} from "pinia";


export const rand = defineStore("rand" , ()=>{
    /**
     * Generates a random number within a specified range.
     * @param min - The minimum number in the range.
     * @param max - The maximum number in the range.
     * @param floor - Whether to floor the result. Default is `true`.
     * @returns A random number within the specified range.
     */
    function randomRange(min, max, floor = true) {
        const value = Math.random() * (max - min) + min;

        return floor ? Math.floor(value) : value;
    }

    /**
     * Returns a random item from an array
     * @param arr - array to be selected
     * @param random - The random function to be used (defaults to Math.random)
     * @returns a random element from the given array
     */
    function randomItem(arr, random = Math.random) {
        return arr[Math.floor(random() * arr.length)];
    }

    return{
        randomRange,
        randomItem,
    }
});