module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;

        private entities: Array<Core.Entity>;
        
        private levelBuilder: LevelBuilder;
        
        private character: Core.Entity;
        private npCharacter: Core.Entity;

        private entityFactory: Core.EntityFactory;

        private level: Level;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';

            this.levelBuilder = new LevelBuilder(this.game);

            this.entities = [];
            this.entityFactory = new Core.EntityFactory();

            this.character = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('playerCharacterConfig'));            
            this.npCharacter = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('AICharacterConfig'));

            this.entities.push(this.character);
            this.entities.push(this.npCharacter);
        }

        public preload():void {
            this.level = this.levelBuilder.buildLevel("test_1");

            this.game.camera.follow(this.character.getSprite());

            this.character.getSprite().position.copyFrom(this.level.startPosition);

            this.npCharacter.getSprite().position.copyFrom(this.level.aiSpawns[0]);
        }

        public update(): void {
            this.entities.forEach(entity => {
                entity.update();
            });

            this.entities.forEach(entity1 => {
                this.entities.forEach(entity2 => {
                    if(entity1.getComponent(PhysicsComponent) != null && entity2.getComponent(PhysicsComponent) != null)
                    {
                        this.game.physics.arcade.collide(entity1.getSprite(), entity2.getSprite());
                    }
                });
                
            });

            this.game.physics.arcade.collide(this.character.getSprite(), this.level.bricks, this.playerWorldCollision, null, this);
            this.game.physics.arcade.collide(this.npCharacter.getSprite(), this.level.bricks);            
        }

        public playerWorldCollision(player: Phaser.Sprite, tile: Phaser.Tile): void {

            if(tile.properties.unbreakable)
            {

            }
            else
            {
                tile.alpha = 0;
                tile.collideDown = false;
                tile.collideUp = false;
                tile.collideLeft = false;
                tile.collideRight = false;
                this.level.bricks.dirty = true;
            }
            
        }

        public render() {
        }


    }
}
