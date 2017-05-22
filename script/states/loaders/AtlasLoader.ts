module Climber {
    export class AtlasLoader extends Core.LoadState {

        constructor(game: Phaser.Game) {
            super(game);
        }

        public start(): void{
            
            this.game.load.atlasXML('alienGreen', 'assets/spritesheets/alienGreen.png', 'assets/spritesheets/alienGreen.xml');
            this.game.load.atlasXML('alienPink', 'assets/spritesheets/alienPink.png', 'assets/spritesheets/alienPink.xml');
            this.game.load.atlasXML('enemies', 'assets/spritesheets/enemies.png', 'assets/spritesheets/enemies.xml');

            super.start();
        }
    }
}