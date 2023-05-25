const canvas = document.getElementById("game");
const ctx = canvas.getContext('2d');


let speed = 7;
let velocityX = 1;
let velocityY = 0;

//making the game for a square canvas right now
let canvasSize = canvas.width;
let tileCount = 20;
let tileSize = canvasSize/tileCount;

//initial variables of the snake 
let headX = tileCount/2;
let headY = tileCount/2;
let appleX = Math.floor((Math.random())*tileCount);
let appleY = Math.floor((Math.random())*tileCount);
let snakeLength = 1;
let appleEaten = 0;


// console.log("ctx width: " + ctx.width);
// console.log( "tileCount" + tileCount);
// console.log("headX" + headX);
// console.log("headY" + headY);
// console.log("canvasSize" + canvasSize);
// console.log(headX);


//game loop
let ctr = 0;

let mainGameIntervalId = setInterval(() => {
    drawGame();
}, 1000/speed);

function drawGame(){
    clearScreen();
    drawSnake();
    drawInfo();
    moveSnake();
    drawApple();
    drawSnakeAtTurn();
    stopSnake();
    console.log("showing the game before ctr++: " + ctr);
    // setTimeout(drawGame, 1000/speed);
    ctr  ++;
    // console.log("showing the game after ctr ++ : " + ctr);
    if(ctr == 5){
        clearInterval(mainGameIntervalId);
    }
}

function clearScreen(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake(){
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX*(tileSize), headY*(tileSize), tileSize, tileSize);
}

function drawApple(){
    ctx.fillStyle = "red";
    if (appleX == headX && appleY == headY){
        appleX = Math.floor((Math.random())*tileCount);
        appleY = Math.floor((Math.random())*tileCount);
        appleEaten ++;
    }
    ctx.fillRect(appleX*tileSize, appleY*tileSize, tileSize, tileSize);
}

function drawInfo(){
    ctx.fillStyle = "white";
    ctx.fillText("headX: " + headX, (tileCount -3)*tileSize, 20, 100);
    ctx.fillText("headY: " + headY, (tileCount -3)*tileSize, 30, 100);
    ctx.fillText("velocityX:  " +  velocityX, (tileCount -3)*tileSize, 40, 100);
    ctx.fillText("velocityY:  " +  velocityY, (tileCount -3)*tileSize, 50, 100);
    ctx.fillText("appleX: " + appleX, (tileCount -3)*tileSize, 60, 100);
    ctx.fillText("appleY: " + appleY, (tileCount -3)*tileSize, 70, 100);
    ctx.fillText("snakeLength: " + snakeLength, (tileCount -3)*tileSize, 80, 100);

}

document.addEventListener("keydown", keyDown);
let valid_keydown = false;

function keyDown(event){
    //left arrow
    if (event.keyCode == 37){
        if(velocityX == 1){
            return;
        }
        vprevX = velocityX;
        vprevY = velocityY;

        velocityX = -1;
        velocityY = 0;
        valid_keydown = true
    }

     //up arrow
     if (event.keyCode == 38){
        if(velocityY == 1){
            return;
        }
        velocityX = 0;
        velocityY = -1;
        valid_keydown = true

    }

    //right arrow
    if (event.keyCode == 39){
        if(velocityX == -1){
            return;
        }
        velocityX = 1;
        velocityY = 0;
        valid_keydown = true

    }
    

    //down arrow
    if (event.keyCode == 40){
        if(velocityY == -1){
            return;
        }
        velocityX = 0;
        velocityY = 1;
        valid_keydown = true

    }
}

function moveSnake() {
    headX += velocityX;
    headY += velocityY;
}

document.addEventListener("keydown", drawSnakeAtTurn);

// function drawSnakeBody() {
//     ctx.fillStyle = "green";
//     snakeLength = appleEaten + 1;

//     //case: when no arrow key is pressed
//     let bodyX = headX - 2*velocityX;
//     let bodyY = headY - 2*velocityY;

//     for (let i = 1; i < snakeLength; i++){
//         ctx.fillRect(bodyX*tileSize, bodyY*tileSize, tileSize, tileSize);
//         bodyX -= velocityX;
//         bodyY -= velocityY;
//     }    
// }



function drawSnakeAtTurn(event){
    console.log("the draw snake function called again: ")
    // let snakeBody = new Array(snakeLength);
    let count = 0;
    if (count == 7){
        clearInterval(intervalID);
    }
    let intervalID = setInterval(() => {
        console.log("the inner time interval function: count " + count);
        count ++;
    }, 1000/speed);


    
    // snakeBody.forEach(bodyBlock, snakeBody => {
    //     if(event.keyCode == true){
    //         let x = headX;
    //         let y = headY;
    //         let vfinalX = velocityX;
    //         let vfinalY = velocityY;

    //     }
    //     if(bodyBlock.bodyX )
    //     bodyBlock.vx = 
    //     bodyBlock.vy = 
    // })

    // for()
}


//IF I USE THE ARROW KEYS AFTER IT HAS STOPPED AT THE EDGE, THEN THE SNAKE WOULD MOVE AHEAD AGAIN ...CLEAR THE BUG LATER ON
function stopSnake(){
    if(headX == 0 || headX == (tileCount-1)){
        velocityX = 0;
    }
    if(headY == 0 || headY == (tileCount - 1)){
        velocityY = 0;
    }
}

drawGame();