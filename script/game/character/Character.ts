module Climber {
    export class Character extends Core.Entity {

        constructor(game: Phaser.Game) {
            super();

            let input: Core.Component = new KeyboardInput(this, game);
            
            this.addComponent(input);
        }
    }
}