module Climber {
    export class ImageLoader extends Core.LoadState {

        constructor(game: Phaser.Game) {
            super(game);
        }

        public start(): void{
            
             this.game.load.image('tilesheet', 'assets/tiles/tiles.jpg');

             super.start();
        }
    }
}