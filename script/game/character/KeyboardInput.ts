module Climber {
    export class KeyboardInput extends Core.Component {
        
        game: Phaser.Game;
        
        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);

            this.game = game;
            
            let keyUp = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            keyUp.onDown.add(this.onUpPressed, this);

            let keyLeft = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            keyLeft.onDown.add(this.onLeftPressed, this);
            keyLeft.onUp.add(this.onKeyReleased, this);

            let keyRight = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            keyRight.onDown.add(this.onRightPressed, this);
            keyRight.onUp.add(this.onKeyReleased, this);
        }

        private destroy(): void {
            this.game.input.keyboard.removeKey(Phaser.Keyboard.UP);
            this.game.input.keyboard.removeKey(Phaser.Keyboard.LEFT);
            this.game.input.keyboard.removeKey(Phaser.Keyboard.RIGHT);
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

        private onKeyReleased(): void {
            console.log("onKeyReleased");
            this.gameObject.sendMessage("stop");
        }
    }
}