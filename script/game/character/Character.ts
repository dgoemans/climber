module Climber {
    export class Character extends Core.Entity {
        public game: Phaser.Game;

        constructor(game: Phaser.Game) {
            super();
            this.game = game;

            this.addSprite(this.game, this.game.world, 0, 0, "star");
            this.addComponent(new KeyboardInput(this, game));
            this.addComponent(new CharacterMovement(this, game, this.sprite));

        }
    }
}