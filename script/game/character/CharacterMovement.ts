module Climber {
    import b2Position = box2d.b2Position;
    export class CharacterMovement extends Core.Component {
        private position: Phaser.Point;

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);
        }

        private jump(first: string, second: string): void {
            console.log("Jump received", first, second);
        }

        private left(): void {
            console.log("Left received");
            position.x -= 4;
            gameObject.sendMessage("updatePosition", position);
        }

        private right(): void {
            console.log("Right received");
        }
    }
}