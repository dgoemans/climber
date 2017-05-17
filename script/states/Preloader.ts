module Climber {
    export class Preloader extends Phaser.State {
        public loadingText:Phaser.Text;
        public game: Phaser.Game;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#ffffff';

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;


            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);

            this.loadingText = this.game.add.text(32, 32, 'Click to start load', {fill: '#ffffff'});

            // this.physics.startSystem(Phaser.Physics.ARCADE);
            //this.game.physics.arcade.gravity.y = 300;
        }

        public preload():void {
            this.game.load.image('star', 'assets/images/star.png');

            this.game.load.start();
        }

        public loadStart():void {
            this.loadingText.setText('Loading ......');
        }

        public fileComplete(progress:any, totalLoaded:any, totalFiles:any):void {
            this.loadingText.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        }

        public loadComplete():void {
            console.log('preloader');
            this.loadingText.setText('Load Complete');

            this.game.state.start('GamePlay');
        }

    }
}
