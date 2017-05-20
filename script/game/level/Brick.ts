module Climber {
    export class Brick extends Core.Entity {

        constructor(game: Phaser.Game, tile: Phaser.Tile) {
            super();

            this.addSprite(game, game.world, 0,0,"star_green");

            this.addComponent(new Health(this, 1));
        }
    }
}