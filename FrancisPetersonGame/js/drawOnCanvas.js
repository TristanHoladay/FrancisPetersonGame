function drawCanvas(canvas, x, y, img) {
    var ctx = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    if(canvas == $('mainCanvas')) { 
        $('Mimg').src = img; 
        ctx.drawImage(Mimg, x, y, cw, ch);
    }
    if(canvas == $('SLCanvas')) { 
        $('SLimg').src = img;
        ctx.drawImage(SLimg, x, y, cw, ch);
    }
    if(canvas == $('SRCanvas')) {
        $('SRimg').src = img;
        ctx.drawImage(SRimg, x, y, cw, ch);
    }
}

function clearCanvas(canvas) {
    var canvas = $('mainCanvas');
    var ctx = canvas.getContext("2d");
    var cw = canvas.width;
    var ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);
}

function drawSL() {
    drawCanvas($('SLCanvas'), 0, 0, arrSpeakers[0]);
}

function drawSR() {
    drawCanvas($('SRCanvas'), 0, 0, arrSpeakers[1]);
}

function square(canvas, x, y) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.rect(x, y, 50, 50);
    ctx.stroke();
}

function circle(canvas, x, y) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(70, 60, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function squareRightLoop(x, y) {
    var speed = 20;
    var xStop = 300;
        function doThis() {
            clearCanvas($('mainCanvas'));
            console.log(x);
            square($('mainCanvas'), x, y);
            x += speed;
            console.log(x);
            if(x<300) { requestAnimationFrame(doThis); }
            else{cancelAnimationFrame(doThis); }
    };
    if(x < xStop) { requestAnimationFrame(doThis); }
    else{cancelAnimationFrame(); }
}