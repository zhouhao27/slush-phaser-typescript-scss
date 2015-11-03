/// <reference path="../libs/phaser/typescript/phaser.d.ts"/>
/// <reference path="states/boot.ts"/>

class Game extends Phaser.Game {

	constructor() {
		//noinspection TypeScriptValidateTypes
    super(800, 600, Phaser.AUTO, 'content', null);
    this.state.add('boot',States.BootState,true);
  }

}

var mygame = new Game();
