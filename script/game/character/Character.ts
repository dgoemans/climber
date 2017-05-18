module Climber {
    export class Character extends Core.Entity {
        public game: Phaser.Game;
        public characterSprite: Phaser.Sprite;

        constructor(game: Phaser.Game) {
            super();
            this.game = game;

            this.addComponent(new KeyboardInput(this, game));
            this.addComponent(new CharacterMovement(this, game));
            this.addComponent(new SpriteComponent(this, 'star', game));
        }
    }
}