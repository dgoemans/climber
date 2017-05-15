module Climber {
    export class TitleScreen extends Phaser.State {
        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#ffffff';

            let button:Phaser.Button = new Phaser.Button(this.game, this.game.width / 2, this.game.height - 100, 'StartButton', ():void => {
                //Go to Game state
                // this.game.state.start('GamePlay');
            });
            button.anchor.set(0.5);
            button.scale.set(0.8);
            this.game.add.existing(button);

        }

    }
}
