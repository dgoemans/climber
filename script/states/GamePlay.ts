module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;
        private levelBuilder: LevelBuilder;
        private character: Character;
        private entityFactory: Core.EntityFactory;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';
            this.levelBuilder = new LevelBuilder(this.game);

            this.entityFactory = new Core.EntityFactory();

            let character2 = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('playerCharacterConfig'));            

            this.character = new Character(this.game);

        }

        public preload():void {
            let level = this.levelBuilder.buildLevel("test_1");

            this.game.world.resize(level.sizeInPixels.x, level.sizeInPixels.y);

            this.character.sendMessage("updatePosition", level.startPosition);

            //this.game.camera.follow(this.character.sprite);

            
            level.tiles.forEach(tile => {

                let brick = new Brick(this.game, tile);
                brick.sendMessage("updatePosition", new Phaser.Point(tile.x * tile.width, tile.y * tile.height));
                
            });
        }

        public update(): void {
        }

        public render() {
        }


    }
}
