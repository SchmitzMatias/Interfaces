let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext("2d");
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let boardWidth = 800;
let boardHeigth = 600;

let background = new Image();
background.src = './images/gameboard3.png';

let gameBackground = new Image();
gameBackground.src = './images/lateralbackground.png';

let rows=6;
let columns=7;

let board = new Board(rows,columns,0,canvasHeight-boardHeigth,boardWidth,boardHeigth,background,ctx);
board.initialize();

let player1 = new Player("pepe");
let player2 = new Player("moni");

let game = new Game(player1,player2,board,rows*columns/2,canvasWidth,canvasHeight,gameBackground,ctx);
game.draw();


let isMouseDown = false;
let lastClickedFigure = null;

function onMouseDown(e){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    isMouseDown = true;

    if(lastClickedFigure !=null){
        lastClickedFigure.setResaltado(false);
        lastClickedFigure = null;
    }
    let clickFig = findClickedFigure(x,y);
    if (clickFig!=null){
        if(game.checkTurn(clickFig)){
            clickFig.setResaltado("#483100");
            lastClickedFigure = clickFig;
            clickFig.setPreviousX(clickFig.getPosX());
            clickFig.setPreviousY(clickFig.getPosY());
            clickFig.draw();
        }
        
    }
}

function onMouseUp(e){
    isMouseDown = false;
    if(lastClickedFigure!=null){
        if(game.checkPlay(lastClickedFigure)){
            lastClickedFigure=null; //NOTA: ya se agregó al tablero, entonces "vacio" ultima, sino: bug
        }
    }
}


function onMouseMove(e){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    if(isMouseDown && lastClickedFigure!=null){
        lastClickedFigure.setPosition(x,y);
        game.draw();
    }
}

function onMouseLeave(e){
    let rect = e.target.getBoundingClientRect();
    let x= e.clientX - rect.left;
    let y= e.clientY - rect.top;
    if (x<0 || x>canvasWidth || y<0 || y>canvasHeight){
        if(lastClickedFigure!=null){
            lastClickedFigure.setPosX(lastClickedFigure.getPreviousX());
            lastClickedFigure.setPosY(lastClickedFigure.getPreviousY());
            isMouseDown = false;
            lastClickedFigure.setResaltado(false)
            game.draw();
        }
    }
}

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0,0, canvasWidth, canvasHeight);
}


function findClickedFigure(x, y){
    
    let chips = game.player1.getChips();
    for(let i=chips.length-1; i>=0; i--){
        let chip = chips[i];
        if(chip.isPointInside(x, y)){
            return chip;
        }
    }
    chips = game.player2.getChips();
    for(let i=chips.length-1; i>=0; i--){
        let chip = chips[i];
        if(chip.isPointInside(x, y)){
            return chip;
        }
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mousemove', onMouseMove, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mouseleave',onMouseLeave,false);