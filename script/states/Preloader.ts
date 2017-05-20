module Climber {
    export class Preloader extends Phaser.State {
        public loadingText:Phaser.Text;
        public game: Phaser.Game;
        private waiting: boolean;

        private loadStates: Core.LoadState[];

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#ffffff';

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            this.waiting = false;

            this.loadStates = [];
            
            this.loadStates.push(new ImageLoader(this.game));
            this.loadStates.push(new LevelLoader(this.game));
            this.loadStates.push(new EntityLoader(this.game));
            
            
            this.loadingText = this.game.add.text(32, 32, 'Click to start load', {fill: '#ffffff'});

            this.physics.startSystem(Phaser.Physics.ARCADE);
        }

        public preload():void {
            this.waiting = true;
        }

        private loadDone(): void {
            this.waiting = true;
        }

        private loadNextState(): void{            
            if(this.loadStates.length === 0){
                this.game.state.start('GamePlay');
            }
            else
            {
                let state = this.loadStates.shift();
                state.onLoad.addOnce(this.loadDone, this);
                state.start();
            }
        }


        public update(): void{
            if(this.waiting){
                this.loadNextState();
                this.waiting = false;
            }
        }
    }
}
