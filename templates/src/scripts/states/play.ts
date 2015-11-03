/// <reference path="../../libs/phaser/typescript/phaser.d.ts"/>

module States {

	export class PlayState extends Phaser.State {
		create() {
			var text = "Hello!!!";
			var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
			this.game.add.text(0, 0, text, style);
		}
	}

}
