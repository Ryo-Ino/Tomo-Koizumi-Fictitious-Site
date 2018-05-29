let num = 0;

let getDevice = (function() {
    let ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        return 'sp';
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        return 'tab';
    } else {
        return 'other';
    }
})();

if (getDevice == 'sp') {
    num = 1;
} else if (getDevice == 'tab') {
    num = 2;
} else if (getDevice == 'other') {
    num = 3;
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('myCanvas');
    frameRate(10);
    smooth();
}

function draw() {
    background('#ffffff');

    for (let i = 0; i < num; i++) {
        strokeWeight(1);
        stroke(random(255), random(255), random(255));
        line(random(width), random(height), random(width), random(height));
    }
}

function mouseMoved() {
    strokeWeight(1);
    stroke(random(255), random(255), random(255));
    line(pmouseX, pmouseY, mouseX, mouseY);
}

function touchMoved() {
    strokeWeight(1);
    stroke(random(255), random(255), random(255));
    line(pmouseX, pmouseY, mouseX, mouseY);
}