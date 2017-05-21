module Climber {
    export class CollisionHandler extends Core.Component {
        public collisionDispatcher: CollisionDispatcher;

        constructor(gameObject: Core.Entity, collisionDispatcher: CollisionDispatcher, checkWorldBounds: boolean) {
            super(gameObject);

            collisionDispatcher.registerEntity(gameObject);
            this.collisionDispatcher = collisionDispatcher;
            this.collisionDispatcher.registerEntity(gameObject);

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
            this.gameObject.sendMessage('hitEntity', other);
        }

        private collisionWithTile(tile: Phaser.Tile): void {
            if(this.gameObject.getSprite().body.onCeiling())
            {
                this.gameObject.sendMessage('hitCeiling', tile);
            }

            if(this.gameObject.getSprite().body.onWall())
            {
                this.gameObject.sendMessage('hitWall', tile);
            }
        }

        private collideWithCanvasWorld(sprite: Phaser.Sprite, up: boolean, down: boolean, left: boolean, right: boolean): void {
            
            if(left || right){
                this.gameObject.sendMessage('hitWall', null);
            }
        }

        public destroy() : void {
            this.collisionDispatcher.deregisterEntity(this.gameObject);
        }
    }
}