module Climber {
    export class GamePlay extends Phaser.State {
        public game: Phaser.Game;
        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';
        }

        public preload():void {
            this.game.world.shutdown();
        }

    }
}
