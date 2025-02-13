import {Drawer} from "./build/draw.js";

const width = 10;
const height = 20;

const drawer = new Drawer(width, height);



drawer.drawing((canvas)=>{
    canvas[1][5] = 1
    canvas[1][6] = 1


});


