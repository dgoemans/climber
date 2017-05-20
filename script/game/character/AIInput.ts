module Climber {
    export class AIInput extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);
        }

        private onLeftHit(): void {
            console.log("LEFT HIt");
            this.gameObject.sendMessage("right");
        }

        private onRightHit(): void {
            console.log("Right HIt");
            this.gameObject.sendMessage("left");
        }
    }
}