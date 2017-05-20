module Climber {
    export class EntityLoader extends Core.LoadState {

        constructor(game: Phaser.Game) {
            super(game);
        }

        public start(): void{
            
            this.game.load.json('playerCharacterConfig', 'assets/entities/playerCharacter.json');
            this.game.load.json('AICharacterConfig', 'assets/entities/AICharacter.json');
            this.game.load.json('level', 'assets/entities/level.json');

            this.game.load.json('brickConfig', 'assets/entities/brick.json');

            super.start();
        }
    }
}