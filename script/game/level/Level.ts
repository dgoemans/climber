module Climber {
    export class Level {

        public startPosition = new Phaser.Point();

        public aiSpawns = new Array();

        public tileMap: Phaser.Tilemap;

        public bricks: Phaser.TilemapLayer;

        public background: Phaser.TilemapLayer;

        constructor() {
        }

    }
}