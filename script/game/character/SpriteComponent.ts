module Climber {
    export class SpriteComponent extends Core.Component {
        public game: Phaser.Game;
        public actorSprite: Phaser.Sprite;
        public position: Phaser.Point;

        constructor(gameObject: Core.Entity, type: string, game: Phaser.Game) {
            super(gameObject);
            this.game = game;
            this.actorSprite = new Phaser.Sprite(this.game, 0, 0, type);
            this.game.add.existing(this.actorSprite);
            this.actorSprite.anchor.set(0.5, 0.5);
            this.actorSprite.scale.setTo(1, 1);
        }

        private updatePosition(position: Phaser.Point): void {
            console.log("Position received");
            this.actorSprite.x = position.x;
            this.actorSprite.y = position.y;
        }
    }
}