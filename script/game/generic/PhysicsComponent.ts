module Climber {
    export class PhysicsComponent extends Core.Component {
        public game: Phaser.Game;
        protected sprite: Phaser.Sprite;

        constructor(gameObject: Core.Entity, game: Phaser.Game, sprite: Phaser.Sprite, isImmovable: boolean) {
            super(gameObject);
            this.game = game;
            this.sprite = sprite;
            this.enablePhysics(isImmovable)
        }

        //todo togglable and as a message
        protected enablePhysics(isImmovable: boolean): void {
            this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
            this.sprite.body.collideWorldBounds = true;
            this.sprite.body.immovable = isImmovable;
        }
    }
}