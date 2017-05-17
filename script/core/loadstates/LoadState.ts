module Core {
    export class LoadState {

        game: Phaser.Game;
        
        public onLoad: Phaser.Signal;

        constructor(game: Phaser.Game) {
            this.game = game;

            this.onLoad = new Phaser.Signal();
        }

        public start():void {
            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);

            this.game.load.start();
        }

        public loadStart():void {
        }

        public fileComplete(progress:any, totalLoaded:any, totalFiles:any):void {
        }

        public loadComplete():void {
            console.log('finished load state');
            
            this.game.load.onLoadStart.remove(this.loadStart, this);
            this.game.load.onFileComplete.remove(this.fileComplete, this);
            this.game.load.onLoadComplete.remove(this.loadComplete, this);

            this.onLoad.dispatch();
        }

    }
}