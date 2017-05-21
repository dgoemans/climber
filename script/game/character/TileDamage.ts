module Climber {
    export class TileDamage extends Core.Component {

        constructor(gameObject: Core.Entity) {
            super(gameObject);
        }

        private hitCeiling(tile?: Phaser.Tile): void {
            if(tile !== undefined && !tile.properties.unbreakable) {
                this.destroyTile(tile);
            }
        }

        private hitWall(tile?: Phaser.Tile): void {
        }

        private destroyTile(tile: Phaser.Tile) : void {
            tile.alpha = 0;
            tile.collideDown = false;
            tile.collideUp = false;
            tile.collideLeft = false;
            tile.collideRight = false;
            tile.layer.dirty = true;
        }

    }
}