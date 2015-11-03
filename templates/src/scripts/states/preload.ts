/// <reference path="../../libs/phaser/typescript/phaser.d.ts"/>
/// <reference path="boot.ts"/>
/// <reference path="play.ts"/>

// load all the states
module States {

  export class PreloadState extends Phaser.State {

    preload() {
      this.game.state.add('boot',BootState);
      this.game.state.add('play',PlayState);
    }

    create() {
      this.game.state.start('boot');
    }

  }
}
