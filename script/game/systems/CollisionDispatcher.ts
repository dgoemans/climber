module Climber {
    export class CollisionDispatcher extends Core.System implements Core.Updateable {

        private entities: Array<Core.Entity>;
        private game: Phaser.Game;
        private level: Level;

        constructor(game: Phaser.Game) {
            super();
            this.entities = [];
            this.game = game;
        }

        //todo togglable and as a message
        public registerEntity(entity: Core.Entity): void {
            this.entities.push(entity);
        }

        public registerLevel(level: Level): void {
            this.level = level;
        }

        public update(): void {
            
            this.updateEntityCollisions();
            this.updatWorldCollisions();
        }

        private findEntityBySprite(sprite: Phaser.Sprite): Core.Entity {
            for(let entity of this.entities)
            { 
                if(entity.getSprite() === sprite)
                {
                    return entity;
                }
            }
        }

        private updateEntityCollisions(): void {
            this.entities.forEach(entity1 => {
                this.entities.forEach(entity2 => {
                    this.game.physics.arcade.collide(entity1.getSprite(), entity2.getSprite(), this.entityCollision, null, this);
                });                
            });
        }

        public entityCollision(sprite1: Phaser.Sprite, sprite2: Phaser.Sprite): void {
            let entity1 = this.findEntityBySprite(sprite1);
            let entity2 = this.findEntityBySprite(sprite2);
            
            entity1.sendMessage("collisionWithEntity", entity2);
            entity2.sendMessage("collisionWithEntity", entity1);

        }

        private updatWorldCollisions() : void {
             this.entities.forEach(entity => {
                 this.game.physics.arcade.collide(entity.getSprite(), this.level.bricks, this.worldCollision, null, this);
             });
            
        }

        public worldCollision(sprite: Phaser.Sprite, tile: Phaser.Tile): void {

            let entity = this.findEntityBySprite(sprite);
            entity.sendMessage("collisionWithTile", tile);
        }
    }
}