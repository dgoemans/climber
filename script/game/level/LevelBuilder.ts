module Climber {
    export class LevelBuilder extends Core.Component {

        private game: Phaser.Game;

        private entityFactory: Core.EntityFactory;
        private collisionDispatcher: CollisionDispatcher;
        private injector: Core.Injector;
        private updateList: any;
        private level: Level;
        private actorList: Array<Core.Entity>;

        constructor(gameObject: Core.Entity, game: Phaser.Game, injector: Core.Injector, updateList: any, entityFactory: Core.EntityFactory, collisionDispatcher: CollisionDispatcher) {
            super(gameObject);
            this.game = game;
            this.injector = injector;
            this.updateList = updateList;
            this.entityFactory = entityFactory;
            this.collisionDispatcher = collisionDispatcher;
            this.actorList = [];
        }

        public load(name: string): void {
            let tilemap = this.game.add.tilemap(name);

            this.level = this.buildLevel(tilemap);

            this.loadCharacters(this.level);
        }

        public buildLevel(tilemap: Phaser.Tilemap): Level {
            
            let level = new Level();

            level.tileMap = tilemap;

            level.tileMap.addTilesetImage('tiles', 'tilesheet');

            //level.background = level.tileMap.createLayer('Background');

            level.bricks = level.tileMap.createLayer('Bricks');

            level.tileMap.setCollisionBetween(1, 10000, true, 'Bricks');

            level.bricks.resizeWorld();

            let objectLayer = level.tileMap.objects['Objects'];

            level.startPosition.set(objectLayer[0].x, objectLayer[0].y);

            level.aiSpawns.push(new Phaser.Point(objectLayer[1].x, objectLayer[1].y));

            this.collisionDispatcher.registerLevel(level);

            return level;

        }

        private loadCharacters(level: Level): void {
            let mainCharacter = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('playerCharacterConfig'));            

            this.game.camera.follow(mainCharacter.getSprite());

            mainCharacter.getSprite().position.copyFrom(level.startPosition);

            this.injector.register("mainCharacter", mainCharacter);

            this.updateList.push(mainCharacter);

            this.actorList.push(mainCharacter);

            let npCharacter = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('AICharacterConfig'));

            npCharacter.getSprite().position.copyFrom(level.aiSpawns[0]);

            this.injector.register("npCharacter", npCharacter);

            this.updateList.push(npCharacter);

            this.actorList.push(npCharacter);
        }

        public unload(): void {
            
            Helpers.removeItem(this.updateList, this.injector.resolve("mainCharacter"));

            Helpers.removeItem(this.updateList, this.injector.resolve("npCharacter"));

            this.collisionDispatcher.deregisterLevel(this.level);

            this.injector.deregister("mainCharacter");

            this.injector.deregister("npCharacter");

            this.actorList.forEach(actor => {
                if(actor.getSprite() !== null)
                {
                    actor.sendMessage("destroy");
                }

                actor.getSprite().destroy();
            });

            this.level.bricks.destroy();

            this.level.tileMap.destroy();
        }
    }
}