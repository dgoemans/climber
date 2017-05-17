module Climber {
    export class GamePlay extends Phaser.State {
        public game: Phaser.Game;
        public spir: Phaser.Sprite;
        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';

            new Character(this.game);

        }

        public preload():void {
            // this.game.world.shutdown();
        }

        public render() {
            // this.game.debug.spriteInfo(this.spir, 120, 132);
        }


    }
}
