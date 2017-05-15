module Climber {
    export class CharacterMovement extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);            
        }

        private jump(): void {
            console.log("Jump received");
        }
    }
}