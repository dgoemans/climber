module Climber {
    export class Preloader extends Phaser.State {
        public loadingText:Phaser.Text;
        public game: Phaser.Game;

        private loadStates: Core.LoadState[];

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#ffffff';

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;

            this.loadStates = [];
            
            this.loadStates.push(new ImageLoader(this.game));
            this.loadStates.push(new LevelLoader(this.game));
            
            this.loadingText = this.game.add.text(32, 32, 'Click to start load', {fill: '#ffffff'});

            // this.physics.startSystem(Phaser.Physics.ARCADE);
            //this.game.physics.arcade.gravity.y = 300;
        }

        public preload():void {
            this.game.load.start();
        }

        public loadStart():void {
            this.loadNextState();            
        }

        private loadNextState(): void{            
            if(this.loadStates.length === 0){
                this.game.state.start('GamePlay');
            }
            else
            {
                let state = this.loadStates.shift();
                state.onLoad.addOnce(this.loadNextState, this);
                state.start();
            }
        }
    }
}
