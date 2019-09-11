//Default controls stored in variable names with "Key" on the end
//only put things in the "keyDown" function if the key is meant to be held down
// ----------------------------------------------
const chatKey = 220; // "\"
const enterKey = 13; // Enter

var chatString = "";
var isChatUp = false;
function clearChat() { $('chatInput').value = ""; }

function keyUp(){
    var e = event.keyCode;

    // if(key == enterKey){alert('you Pressed Enter!!!');}

    // Chatting
    if(e == chatKey){
        $('chatInput').classList.toggle('hide');
    	if ($('chatInput').classList.toggle('hide') == false) { $('chatInput').blur(); clearChat(); }
    	if ($('chatInput').classList.toggle('hide') == true) { $('chatInput').focus(); }
	}
}

var player;

function startGame() {
    player = new component(10, 75, 20, 40, "red");
    myGameArea.start();
}

var myGameArea = {
	canvas : document.createElement("canvas"),
    frameRt : 45,
    start : function() {
    	this.canvas.id = "gCanvas";
    	this.canvas.width = $('subMC').offsetWidth;
		this.canvas.height = $('subMC').offsetHeight;
        this.context = this.canvas.getContext("2d");
        $('subMC').parentNode.insertBefore(this.canvas, document.getElementById('subMC').childNodes[0]);
    	this.interval = setInterval(updateGameArea, (1000/this.frameRt));

    	window.addEventListener('keydown', function (e) {
      		myGameArea.key = e.keyCode;
    	});
    	window.addEventListener('keyup', function (e) {
      		myGameArea.key = false;
    	});
    },

    clear : function() {
    	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(x, y, w, h, color) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;

    this.spdX = 0;
    this.spdY = 0;

    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    this.movPos = function() {
    	this.x += this.spdX;
    	this.y += this.spdY;
  	}
}

function updateGameArea() {
	function doIt() {
		myGameArea.clear(); 
		player.update(); 
		player.movPos();
 		  	if (myGameArea.key == false) { stopMov(); } 
		  	else if (myGameArea.key && myGameArea.key == 37) { player.spdX = -5; }
  		  	else if (myGameArea.key && myGameArea.key == 39) { player.spdX = 5; }
 		  	else if (myGameArea.key && myGameArea.key == 38) { player.spdY = -5; }
 		  	else if (myGameArea.key && myGameArea.key == 40) { player.spdY = 5; }
		console.log(); }
	requestAnimationFrame(doIt);
	// doIt();
}

function movUp() {
  player.spdY -= 1; 
}

function movDn() {
  player.spdY += 1; 
}

function movLt() {
  player.spdX -= 1;
}

function movRt() {
  player.spdX += 1;
}

function stopMov() {
    player.spdX = 0; 
    player.spdY = 0; 
}