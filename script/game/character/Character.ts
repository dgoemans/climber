module Climber {
    export class Character extends Core.Entity {
        public game: Phaser.Game;

        constructor(game: Phaser.Game) {
            super();
            this.game = game;

            this.addSprite(this.game, this.game.world, 100, 100, "star");
            this.addComponent(new PhysicsComponent(this, game, false));
            this.addComponent(new KeyboardInput(this, game));
            this.addComponent(new CharacterMovement(this, game));

        }
    }
}