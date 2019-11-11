// Constants
const WIDTH_CANVAS = 800;
const HEIGHT_CANVAS = 450;
// Variables
let gEngine = gEngine || {};
let mPublic = {
    mWidth : mWidth,
    mHeight : mHeight,
    mContext : mContext
};
// gEngine is where all the physics engine core
// functionality will reside.
gEngine.Core = ( ()=>{
    let mCanvas, mContext, mWidth = WIDTH_CANVAS, mHeight = HEIGHT_CANVAS;
    mCanvas = document.getElementById('canvas');
    mContext = mCanvas.getContext('2d');
    mCanvas.height = mHeight;
    mCanvas.width = mWidth;
})();
