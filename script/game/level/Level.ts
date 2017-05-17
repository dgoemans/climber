module Climber {
    export class Level {

        public map: Phaser.Tilemap;
        public startPosition: Phaser.Point;

        constructor() {
            this.startPosition = new Phaser.Point;
        }

    }
}