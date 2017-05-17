module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;
        private levelBuilder: LevelBuilder;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';
            this.levelBuilder = new LevelBuilder(this.game);
            this.levelBuilder.buildLevel("test_1");


            new Character(this.game);

        }

        public preload():void {
        }

        public render() {
        }


    }
}
