module Climber {
    export class ImageLoader extends Core.LoadState {

        constructor(game: Phaser.Game) {
            super(game);
        }

        public start(): void{
            
            this.game.load.image('tilesheet', 'assets/tiles/tiles.jpg');
            this.game.load.image('star', 'assets/images/star.png');
            this.game.load.image('star_green', 'assets/images/star_green.png');
            this.game.load.image('star_red', 'assets/images/star_red.png');

            super.start();
        }
    }
}