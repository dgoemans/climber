module Climber {
    export class Character extends Core.Entity {

        constructor(game: Phaser.Game) {
            super();

            this.addComponent(new KeyboardInput(this, game));
            this.addComponent(new CharacterMovement(this, game));
        }
    }
}