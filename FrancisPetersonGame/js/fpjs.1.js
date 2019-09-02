function $(id) { 
    return document.getElementById(id); 
}

function keyUp(){
    var key = event.keyCode;
        // if(key == 13){alert('you Pressed Enter!!!');}
        if(key == 73){$('chatInput').classList.toggle('hide');}
}

function chatToMainText(){
    if(key == 13){$('mainText').innerHTML = $('chatInput').innerHTML;}
}

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                'n','o','p','q','r','s','t','u','v','w','x','y','z'];

var strength = 10; var toughness = 10; var agility = 10; var perception =10;
var charisma = 10; var health = 100; var stamina = 100; var steam = 100;
var crew = 1; var clams = 5; var gold = 5;

var txt1 = ["uno", "dos", "tres"];
var txtPos = 0;

var arrScreens = [];
for(i=0;i<50;i++){
    arrScreens.push("images\\screens\\" + i + ".gif");
    console.log(arrScreens[i]);
}

var arrSpeakers = [
"images\\speakers\\francis.0.gif",
"images\\speakers\\possum.jpg",
];

var arrSounds = [
"sounds\\testsound.wav"
];

function testBtn(){
    $('mainText').innerHTML = "this is the new striiing.";
}

function txtUp() {
    txtPos += 1;
    $("mainText").innerHTML = "UP! This is the text in index:" + txtPos + ": " + txt1[txtPos];
}

function txtDwn() {
  	txtPos -= 1;
  	$("mainText").innerHTML = "DOWN! This is the text in index:" + txtPos + ": " + txt1[txtPos];
}

function typeOut(text, speed){

    $('mainText').innerHTML = '';
    i = 0;

    var printInterval = setInterval(iterate, speed);

    function iterate() {
        if(i > text.length){ clearInterval(printInterval);}
        else{$('mainText').innerHTML += text.charAt(i); i++;}
    }
}

var sound;
function preload() {
    for(i=0; i<arrSpeakers.length; i++) {
        var img = new Image();
        img.src = arrSpeakers[i];
    }
    for(i=0; i<arrScreens.length; i++) {
        var img = new Image();
        img.src = arrScreens[i];
    }

    sound = new sound('sounds\\doorbuzz.ogg');
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function playSound(){
    sound.play();
}

function startMenu() {
    $('subMC').src = arrScreens[0];
    update();
}

function flash(objectID) {   
  var counter = 0;
  var speed = 60;
  var clip = setInterval(frame, speed);
  function frame() {
        if (counter == 6) {
        objectID.style.visibility = "visible"; 
        clearInterval(clip);
        } 
        else if (counter % 2 == 0) {
            objectID.style.visibility = "hidden";
            counter++;
            // console.log(counter);
        } 
        else if (counter % 2 != 0) {
            objectID.style.visibility = "visible";
            counter++;
            // console.log(counter);
        }
        else {
            counter++;
            // console.log(counter);
        }
    }
}

var posRow=0;
var posCol=1;
var posRowLetter = alphabet[posRow];
var playerPos = posRowLetter + posCol;

function movePos(direction){

    function navError(){$('mainText').innerHTML = "You can't go " + direction + "!";}

    if(direction == "west"){
        if(posCol == 1){navError();}
        else{$(playerPos).classList.toggle('highlight');
            posCol--;
            playerPos = posRowLetter + posCol;
        }
    }
    else if(direction == "east"){
        if(posCol == 4){navError();}
        else{$(playerPos).classList.toggle('highlight');
            posCol++;
            playerPos = posRowLetter + posCol;
        }
    }
    else if(direction == "north"){
        if(posRow == 0){navError();}
        else{$(playerPos).classList.toggle('highlight');
            posRow--;
            playerPos = posRowLetter + posCol;
        }
    }
    else if(direction == "south"){
        if(posRow == 3){navError();}
        else{$(playerPos).classList.toggle('highlight');
            posRow++;
            playerPos = posRowLetter + posCol;
        }
    }

    posRowLetter = alphabet[posRow];
    playerPos = posRowLetter + posCol;

    update();
}

function update () {
    if (health <= 0) { death(); }

    playerPos = posRowLetter + posCol;
    $(playerPos).classList.remove('opacMapCell');
    $(playerPos).classList.add('highlight');

    $("strength").style.width = strength + "%";
    $("toughness").style.width = toughness + "%";
    $("agility").style.width = agility + "%";
    $("perception").style.width = perception + "%";
    $("charisma").style.width = charisma + "%";
    $("health").style.width = health + "%";
    $("stamina").style.width = stamina + "%";
    $("steam").style.width = steam + "%";
    $("crew").style.width = crew + "%";
    $("clams").style.width = clams + "%";
    $("gold").style.width = gold + "%";
    
    $("strText").innerHTML = "Strength : " + strength;
    $("touText").innerHTML = "Toughness : " + toughness;
    $("agiText").innerHTML = "Agility : " + agility;
    $("perText").innerHTML = "Perception : " + perception;
    $("chaText").innerHTML = "Charisma : " + charisma;
    $("heaText").innerHTML = "Health : " + health;
    $("staText").innerHTML = "Stamina : " + stamina;
    $("steText").innerHTML = "Steam : " + steam;
    $("creText").innerHTML = "Crew : " + crew;
    $("claText").innerHTML = "Clams : " + clams;
    $("golText").innerHTML = "Gold : " + gold;

}

function changeHealth(amt) {
    var speed = 60;
    var clip = setInterval(frame, speed);
        function frame() {
            if (amt == 0 || amt == NaN) {
            clearInterval(clip);
            }
            else if (amt < 0) {
                health--;
                amt++;
                update();
                // console.log(counter);
            } 
            else if (amt > 0){
                health++;
                amt--;
                update();
                // console.log(counter);
        }    
    }
}

function death() {
    clearCanvas($('mainCanvas'));
    $('subMC').src = arrScreens[6];
    $("health").style.width = "0%";
    $("main").style.background = "darkred";
    document.body.style.background = "red";
}

var jcounter = 0
function jwrite() {
    jcounter++;
    $("journal").innerHTML = "(" + jcounter + ") " + "content here" + 
        "\n- - - - - - - - - -\n" + $("journal").innerHTML
}

// function gameLoop() {
//     requestAnimationFrame(update);
//     console.log();
// }

// setInterval(gameLoop, 1000);