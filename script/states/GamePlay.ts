module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;
        private levelBuilder: LevelBuilder;
        private character: Character;

        private character: Character;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';
            this.levelBuilder = new LevelBuilder(this.game);

            this.character = new Character(this.game);

        }

        public preload():void {
            let level = this.levelBuilder.buildLevel("test_1");

            this.game.world.resize(level.sizeInPixels.x, level.sizeInPixels.y);

            this.character.sendMessage("updatePosition", level.startPosition);
            let spriteComponent = this.character.getComponent(SpriteComponent);

            this.game.camera.follow(spriteComponent.actorSprite);

            
            level.tiles.forEach(tile => {

                let brick = new Brick(this.game, tile);
                brick.sendMessage("updatePosition", new Phaser.Point(tile.x * tile.width, tile.y * tile.height));
                
            });
        }

        public update(): void {
            this.character.update();
        }

        public render() {
        }


    }
}
