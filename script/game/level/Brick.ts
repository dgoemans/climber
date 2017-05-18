module Climber {
    export class Brick extends Core.Entity {

        constructor(game: Phaser.Game) {
            super();

            this.addComponent(new Health(this, 1));
        }
    }
}