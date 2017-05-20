module Climber {
    export class EntityLoader extends Core.LoadState {

        constructor(game: Phaser.Game) {
            super(game);
        }

        public start(): void{
            
            this.game.load.json('playerCharacterConfig', 'assets/entities/playerCharacter.json');

            super.start();
        }
    }
}