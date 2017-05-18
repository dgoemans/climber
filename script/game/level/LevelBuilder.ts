module Climber {
    export class LevelBuilder {

        private game: Phaser.Game;

        constructor(game: Phaser.Game) {

            this.game = game;
        }

        public buildLevel(name: string): Level{
            
            let level = new Level();
            let map = this.game.add.tilemap('test_1');

            //map.addTilesetImage('tiles', 'tilesheet');

            level.size.set(map.width, map.height);

            let objectLayer = map.objects['Objects'];
            level.startPosition.set(objectLayer[0].x, objectLayer[0].y);

            map.layers[0].data.forEach(element => {

                element.forEach(tile => {
                    if(tile.index !== -1)
                    {
                        level.tiles.push(tile);
                    }
                });
                
            });

            return level;
        }
    }
}