module Climber {
    export class LevelBuilder {

        private game: Phaser.Game;

        constructor(game: Phaser.Game) {

            this.game = game;
        }
        
        public buildLevel(name: string): void{
            
            let level = new Level();
            level.map = this.game.add.tilemap('test_1');
        }
    }
}