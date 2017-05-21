module Climber {
    export class CollisionHandler extends Core.Component {

        constructor(gameObject: Core.Entity, collisionDispatcher: CollisionDispatcher, checkWorldBounds: boolean) {
            super(gameObject);            

            collisionDispatcher.registerEntity(gameObject);

            this.setupCanvasCollision(checkWorldBounds);
        }

        private setupCanvasCollision(enableCanvasCollision: boolean): void {
            if(enableCanvasCollision){
                let sprite: Phaser.Sprite = this.gameObject.getSprite();
                sprite.body.onWorldBounds = new Phaser.Signal();
                sprite.body.onWorldBounds.add(this.collideWithCanvasWorld, this);
            }
        }

        private collisionWithEntity(other: Core.Entity): void {
            console.log("Collided with entity: ", other);
        }

        private collisionWithTile(tile: Phaser.Tile): void {
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
                tile.layer.dirty = true;
            }

        }

        private collideWithCanvasWorld(sprite: Phaser.Sprite, up: boolean, down: boolean, left: boolean, right: boolean): void {
            console.log(up, down, left, right);
            if(left){
                this.gameObject.sendMessage('changeDirection', 2);
            }
            if(right){
                this.gameObject.sendMessage('changeDirection', 1);
            }

        }
    }
}