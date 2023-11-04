"use strict";

class Player{

    chips = [];

    /**
     * @param {*} username
     */
    constructor(username){
        this.username=username;
    }


    addChip(chip){
        this.chips.push(chip);
    }

    getChips(){
        return this.chips;
    }

    useChip(){
        this.chips.pop();
    }


}