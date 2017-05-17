module Climber {
    export class Game {
        game: Phaser.Game;
        constructor() {
            this.game = new Phaser.Game(800, 640, Phaser.AUTO, 'content');

            //load your states
            this.game.state.add('Preloader', Preloader, false);
            this.game.state.add('TitleScreen', TitleScreen, false);
            this.game.state.add('GamePlay', GamePlay, false);

        }

        public start(){
            console.log('preloader');
            this.game.state.start('Preloader');
        }
    }
}
