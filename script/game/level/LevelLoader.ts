module Climber {
    export class LevelLoader extends Core.LoadState {

        constructor(game: Phaser.Game) {
            super(game);
        }

        public start(): void{
            
             this.game.load.tilemap('test_1', 'assets/levels/test_1.json', null, Phaser.Tilemap.TILED_JSON);

             super.start();
        }
    }
}