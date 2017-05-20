module Climber {
    interface Updateable {
        update: Function;
    }

    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;

        private levelBuilder: LevelBuilder;
        
        private level: Core.Entity;

        private systemHandler: Core.SystemHandler;

        private updateList: Array<Updateable>;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';
            this.updateList = [];

            let injector = new Core.Injector();
            
            injector.register("game", this.game);
            injector.register("updateList", this.updateList);

            let entityFactory = new Core.EntityFactory(injector);
            injector.register("entityFactory", entityFactory);
            
            
            let collisionDispatcher = new CollisionDispatcher(this.game);
            injector.register("collisionDispatcher", collisionDispatcher);

            this.updateList.push(collisionDispatcher);

            
            this.level = entityFactory.createEntity(this.game, this.game.cache.getJSON('level'));
        }

        public preload():void {
            this.level.sendMessage("load", "test_1");
        }

        public update(): void {
            this.updateList.forEach(element => {
                if(typeof element.update === "function")
                {
                    element.update();
                }
            });
        }

        

        public render() {
        }


    }
}
