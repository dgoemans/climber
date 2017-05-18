module Climber {
    export class CharacterMovement extends Core.Component {
        private position: Phaser.Point;

        constructor(gameObject: Core.Entity, game: Phaser.Game, sprite: Phaser.Sprite) {
            super(gameObject);
            this.position = new Phaser.Point(0, 0);
        }

        private jump(first: string, second: string): void {
            console.log("Jump received", first, second);
        }

        private left(): void {
            console.log("Left received");
            // position.x -= 4;
            this.position.x -= 5;
            this.gameObject.sendMessage("updatePosition", this.position);
        }

        private right(): void {
            console.log("Right received");
            this.position.x += 5;
            this.gameObject.sendMessage("updatePosition", this.position);
        }
    }
}