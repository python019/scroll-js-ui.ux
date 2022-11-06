const imagesLoaded = require('imagesloaded');

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};


 const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
 

 const getTranslationDistance = (element1, spread = 400, maxDistance = 5000) => {
    const winsize = {width: window.innerWidth, height: window.innerHeight}
    const rect = element1.getBoundingClientRect();
    const elCenter = {x: rect.left + element1.offsetWidth/2, y: rect.top + element1.offsetHeight/2};
    const win = {x: winsize.width/2, y: winsize.height/2};

    spread = Math.max( map(getDistanceToCenter(element1), 0, maxDistance, spread, 0) , 0);
    
    const angle = Math.atan2(Math.abs(win.y - elCenter.y), Math.abs(win.x - elCenter.x));

    let x = Math.abs(Math.cos(angle) * spread);
    let y = Math.abs(Math.sin(angle) * spread);

    return {
        x: elCenter.x < win.x ? x*-1 : x,
        y: elCenter.y < win.y ? y*-1 : y
    };
};


 const getDistanceToCenter = (element1) => {
    const winsize = {width: window.innerWidth, height: window.innerHeight}
    const elCenter = {x: element1.offsetLeft + element1.offsetWidth/2, y: element1.offsetTop + element1.offsetHeight/2};
    const wincenter = {x:winsize.width/2, y: winsize.height/2};
    return Math.hypot(elCenter.x - wincenter.x, elCenter.y - wincenter.y);
}

export {
    preloadImages,
    map,
    getTranslationDistance,
    getDistanceToCenter,
};