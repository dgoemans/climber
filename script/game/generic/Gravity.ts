module Climber {
    export class Gravity extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game, gravityX: number, gravityY: number, maxVelocityX: number, maxVelocityY: number) {
            super(gameObject);

            let sprite = gameObject.getSprite();
            sprite.body.gravity.x = gravityX;
            sprite.body.gravity.y = gravityY;
            sprite.body.maxVelocity.x = maxVelocityX;
            sprite.body.maxVelocity.y = maxVelocityY;
        }
    }
}