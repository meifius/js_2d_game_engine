"use strict";
const KEY_F = 70;
const KEY_G = 71;

function userControl (event){

    let keycode;
    let width = gEngine.Core.mWidth;
    let height = gEngine.Core.mHeight;
    let context = gEngine.Core.mContext;
    if (window.event) { // IE
        keycode = event.keyCode;
    } else if (event.which) {// Netscape/Firefox/Opera  
        keycode = event.which;
    }

    
    if (keycode === KEY_F) {
        //f
        //create new Rectangle at random position
        context.strokeRect(Math.random() * width * 0.8, // x position of center
                Math.random() * height * 0.8, // y position of center
                Math.random() * 30 + 10, Math.random() * 30 + 10); // width and height location
    }
    if (keycode === KEY_G) {
        //g
        //create new Circle at random position
        context.beginPath();
        //draw a circle
        context.arc(Math.random() * width * 0.8, // x position of center
                Math.random() * height * 0.8, // y position of center
                Math.random() * 30 + 10, 0, Math.PI * 2, true); // radius
        context.closePath();
        context.stroke();
    }

}
