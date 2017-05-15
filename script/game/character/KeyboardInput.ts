module Climber {
    export class KeyboardInput extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);
            
            let keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            keyUp.onDown.add(this.onUpPressed, this);
        }

        private onUpPressed(): void {
            console.log("UP Pressed");
            this.gameObject.sendMessage("jump");
        }
    }
}