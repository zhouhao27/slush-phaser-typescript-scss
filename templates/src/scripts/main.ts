/// <reference path="../libs/phaser/typescript/phaser.d.ts"/>

class Game {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { create: this.create });
    }

    game: Phaser.Game;

    create() {
        var text = "Hello!";
        var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
        this.game.add.text(0, 0, text, style);
    }

}

var game = new Game();
