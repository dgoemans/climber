module Climber {
    export class CollisionHandler extends Core.Component {

        collisionDispatcher: CollisionDispatcher;

        constructor(gameObject: Core.Entity, collisionDispatcher: CollisionDispatcher) {
            super(gameObject);            

            this.collisionDispatcher = collisionDispatcher;

            this.collisionDispatcher.registerEntity(gameObject);
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

        public destroy() : void {
            this.collisionDispatcher.deregisterEntity(this.gameObject);
        }
    }
}