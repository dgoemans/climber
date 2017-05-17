module Climber {
    export class CharacterMovement extends Core.Component {

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);            
        }

        private jump(first: string, second: string): void {
            console.log("Jump received", first, second);
        }
    }
}