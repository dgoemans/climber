module AdventureRoo {
    export class GamePlay extends Phaser.State {
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
