module Climber {
    export class Level {

        public startPosition: Phaser.Point;

        public size: Phaser.Point;

        public tiles: Phaser.Tile[];

        constructor() {
            this.startPosition = new Phaser.Point();
            this.size = new Phaser.Point();
            this.tiles = new Array();
        }

    }
}