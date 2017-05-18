module Climber {
    export class Level {

        public startPosition: Phaser.Point;

        public sizeInPixels: Phaser.Point;
        
        public sizeInTiles: Phaser.Point;

        public tiles: Phaser.Tile[];

        constructor() {
            this.startPosition = new Phaser.Point();
            this.sizeInPixels = new Phaser.Point();
            this.sizeInTiles = new Phaser.Point();
            this.tiles = new Array();
        }

    }
}