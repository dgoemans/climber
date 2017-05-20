module Climber {
    export class LevelBuilder {

        private game: Phaser.Game;

        constructor(game: Phaser.Game) {

            this.game = game;
        }

        public buildLevel(name: string): Level{
            
            let level = new Level();

            level.tileMap = this.game.add.tilemap('test_1');

            level.tileMap.addTilesetImage('tiles', 'tilesheet');

            //level.background = level.tileMap.createLayer('Background');

            level.bricks = level.tileMap.createLayer('Bricks');

            level.tileMap.setCollisionBetween(1, 10000, true, 'Bricks');

            level.bricks.resizeWorld();

            let objectLayer = level.tileMap.objects['Objects'];

            level.startPosition.set(objectLayer[0].x, objectLayer[0].y);

            level.aiSpawns.push(new Phaser.Point(objectLayer[1].x, objectLayer[1].y));

            return level;
        }
    }
}