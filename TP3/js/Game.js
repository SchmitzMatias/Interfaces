"use strict";
class Game {

    constructor(player1, player2, board, rounds,width,height,background,context){
        this.player1=player1;
        this.player2=player2;
        this.board=board;
        this.rounds=rounds;
        this.width=width;
        this.height=height;
        this.background=background;
        this.ctx=context;
        this.currentTurn=player1;
        this.winner=null;
        this.deal();
    }

    deal(){
        let img1 = document.querySelector("#chip-dog");
        let img2 = document.querySelector("#chip-duck");
        let borderWidth = 2;
        let borderColor = "#976600";
        for(let i=0;i<this.rounds;i++){
            let chip1 = new Chip(this.board.getWidth()+125, this.height-(10*(i+1))-60, 40, img1,"#BDE34D", ctx, borderColor, borderWidth);
            this.player1.addChip(chip1);
        }
        for(let i=0;i<this.rounds;i++){
            let chip2 = new Chip(this.board.getWidth()+225, this.height-(10*(i+1))-60, 40, img2,"#19ADED", ctx, borderColor, borderWidth);
            this.player2.addChip(chip2);
        }
    }

    checkTurn(chip){
        if(chip.getImg()===game.currentTurn.getChips()[0].getImg()){
            return true;
        }
        else{
            return false;
        };
    }

    changeTurn(){
        if(this.currentTurn==this.player1){
            this.player1.useChip();
            this.currentTurn= this.player2;
        }
        else{
            this.player2.useChip();
            this.currentTurn= this.player1;
        }
        
    }

    checkPlay(droppedChip){
        let validX=droppedChip.getPosX()>0 && droppedChip.getPosX()<this.board.getWidth();
        let validY=droppedChip.getPosY()>0 && droppedChip.getPosY()<(this.height-this.board.getHeight());
        if(validX&&validY&&this.winner==null){
            let firstRow=this.board.getRow(0);
            for(let i=0;i<firstRow.length;i++){
                let cellEnd = firstRow[i].getPosX()+firstRow[i].getWidth();
                if(droppedChip.getPosX()<cellEnd){
                    let value= this.board.placeChip(droppedChip,i);
                    if(value!=-1){
                        if(value==1){
                            this.winner=this.currentTurn;
                            console.log("ganaste");                            
                        }
                        this.changeTurn();
                        this.draw();
                        return true;
                    }
                    else{
                        droppedChip.setPosX(droppedChip.getPreviousX());
                        droppedChip.setPosY(droppedChip.getPreviousY());
                        this.draw();
                        return false;
                    }
                }
            }
        }
        else{
            droppedChip.setPosX(droppedChip.getPreviousX());
            droppedChip.setPosY(droppedChip.getPreviousY());
            this.draw();
            return false;
        }
    }


    draw(){
        clearCanvas();
        this.ctx.fillStyle='#19ADED';
        this.ctx.fillRect(0,0,this.board.getWidth(),this.board.getHeight());
        this.ctx.fill();
        this.drawIndicator();
        this.board.draw();
        this.ctx.drawImage(this.background, board.width,0);

        for(let i=0;i<this.player1.getChips().length;i++){
            let chip = this.player1.getChips()[i];
            chip.setFillColor("#BDE34D");
            chip.draw();
        }

        for(let i=0;i<this.player2.getChips().length;i++){
            let chip = this.player2.getChips()[i];
            chip.setFillColor("#BDE3FF");
            chip.draw();
        }
    }
    
    drawIndicator(){
        let firstRow = this.board.getRow(0);
        let arrow = document.querySelector("#arrow-down");
        for(let i=0;i<firstRow.length;i++){
            let cell= firstRow[i];
            let posX= cell.getPosX()+cell.getWidth()/2-arrow.width/2;
            this.ctx.drawImage(arrow,posX,50);
        }
    }
}