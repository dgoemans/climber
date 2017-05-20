module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;
        
        private levelBuilder: LevelBuilder;
        
        private character: Core.Entity;

        private entityFactory: Core.EntityFactory;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';

            this.levelBuilder = new LevelBuilder(this.game);

            this.entityFactory = new Core.EntityFactory();

            this.character = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('playerCharacterConfig'));            

        }

        public preload():void {
            let level = this.levelBuilder.buildLevel("test_1");

            this.game.world.resize(level.sizeInPixels.x, level.sizeInPixels.y);

            this.game.camera.follow(this.character.getSprite());

            this.character.getSprite().position.copyFrom(level.startPosition)
            
            level.tiles.forEach(tile => {

                let brick = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('brickConfig'));            

                brick.getSprite().position.set(tile.x * tile.width, tile.y * tile.height);
                
            });
        }

        public update(): void {
            this.character.update();
        }

        public render() {
        }


    }
}
