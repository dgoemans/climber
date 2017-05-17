module Climber {
    export class KeyboardInput extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);
            
            let keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            keyUp.onDown.add(this.onUpPressed, this);

            let keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            keyLeft.onDown.add(this.onLeftPressed, this);

            let keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            keyRight.onDown.add(this.onRightPressed, this);
        }

        private onUpPressed(): void {
            console.log("UP Pressed");
            this.gameObject.sendMessage("jump");
        }

        private onLeftPressed(): void {
            console.log("LEFT Pressed");
            this.gameObject.sendMessage("left");
        }

        private onRightPressed(): void {
            console.log("Right Pressed");
            this.gameObject.sendMessage("right");
        }
    }
}