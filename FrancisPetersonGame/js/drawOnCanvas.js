console.log(window.innerWidth);
console.log(window.innerHeight);

function drawCanvas(x, y, w, h, img) {
    var ctx = canvas.getContext("2d");
    w = canvas.width; // this nullifies the w paramater and makes the width the canvas.width
    h = canvas.height;
    $('Mimg').src = img; 
    ctx.drawImage(Mimg, x, y, w, h);
}

function clearCanvas() {
    var canvas = $('mainCanvas');
    var ctx = $('mainCanvas').getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);
}

function drawSL(img) {
    SLimg.src = arrSpeakers[0];
}

function drawSR(img) {
    SRimg.src = arrSpeakers[1];
}

function square(x, y, w, h) {
    var ctx = $('mainCanvas').getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.rect(x, y, w, h);
    ctx.stroke();
}

function circle(x, y, d) {
    var ctx = $('mainCanvas').getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, d, 0, 2 * Math.PI);
    ctx.stroke();
}

function rectRightLoop(x, y, w, h) {
    var speed = 20;
    var xStop = 300;
        function doThis() {
            clearCanvas($('mainCanvas'));
            console.log(x);
            square(x, y, w, h);
            x += speed;
            console.log(x);
            if(x >= xStop) {}
            else{requestAnimationFrame(doThis); }
    };
    if(x >= xStop) { cancelAnimationFrame(doThis); }
    else{requestAnimationFrame(doThis); }
}

var r = 0;
function fadeToRed(){
    // if r is >= 255, it will drop down to the next if/else statements
    if (r >= 255) {}
    // ELSE IF r is divisible by the up-increment, the RED value will become "r" ... (red will increment by the amount after modulus)
    else if ((r % 3) == 0){ document.body.style.background = "rgba("+r+",0,0)"; r++; console.log(r); }
    // if r passes through the STOP condition, and isn't divisible by the up-increment, +1
    else{ r++; }
    
    if (r >= 255) { cancelAnimationFrame(fadeToRed); r = 0; }
    else { requestAnimationFrame(fadeToRed); }
}