module Climber {
    export class AIInput extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);
        }

        private onLeftHit(): void {
            console.log("LEFT Pressed");
            this.gameObject.sendMessage("left");
        }

        private onRightHit(): void {
            console.log("Right Pressed");
            this.gameObject.sendMessage("right");
        }
    }
}