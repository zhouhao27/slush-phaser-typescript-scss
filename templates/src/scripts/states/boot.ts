/// <reference path="../../libs/phaser/typescript/phaser.d.ts"/>

// showing splash if needed
module States {
  export class BootState extends Phaser.State {
    preload() {
      this.game.load.image('logo','assets/logo.png');
    }

    create() {
      var logo = this.game.add.image(this.game.width/2,this.game.height/2,'logo');
      logo.anchor.set(0.5,0.5);
      this.game.time.events.add(2000,()=>{
        this.game.state.start('play');
      },this);
    }
  }
}
