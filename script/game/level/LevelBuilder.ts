module Climber {
    export class LevelBuilder {

        private game: Phaser.Game;

        constructor(game: Phaser.Game) {

            this.game = game;
        }

        public buildLevel(name: string): Level{
            
            let level = new Level();
            level.map = this.game.add.tilemap('test_1');

            level.map.addTilesetImage('tiles', 'tilesheet');

            let backgroundlayer = level.map.createLayer('Bricks');

            let objectLayer = level.map.objects['Objects'];

            level.startPosition.x = objectLayer[0].x;
            level.startPosition.y = objectLayer[0].y;

            return level;
        }
    }
}