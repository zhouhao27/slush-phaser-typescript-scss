/// <reference path="../../libs/phaser/typescript/phaser.d.ts"/>
/// <reference path="play.ts"/>

module States {

  export class PreloadState extends Phaser.State {

	preload() {
		var x = this.game.width / 2;
		var y = this.game.height / 2;

		var logo = this.game.add.sprite(x, y, 'logo');
		logo.anchor.set(0.5);

		var progressBar = this.game.add.sprite(x, y + 100, 'progressBar');
		progressBar.anchor.set(0.5);
		this.load.setPreloadSprite(progressBar);
	}

	create() {
		this.game.time.events.add(2000, () => {
			this.game.state.start('play');
		}, this);
	}
}
