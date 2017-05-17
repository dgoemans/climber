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
            
            new Character(this.game);
        }

        public preload():void {
            let level = this.levelBuilder.buildLevel("test_1");
            this.game.camera.x = level.startPosition.x;
            this.game.camera.y = level.startPosition.y;
        }

    }
}
