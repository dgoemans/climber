module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;
        
        private levelBuilder: LevelBuilder;
        
        private character: Core.Entity;

        private entityFactory: Core.EntityFactory;

        private level: Level;

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
            this.level = this.levelBuilder.buildLevel("test_1");

            this.game.camera.follow(this.character.getSprite());

            this.character.getSprite().position.copyFrom(this.level.startPosition);
        }

        public update(): void {
            this.character.update();

            this.game.physics.arcade.collide(this.character.getSprite(), this.level.bricks, this.playerWorldCollision, null, this);
        }

        public playerWorldCollision(): void {
            
        }

        public render() {
        }


    }
}
