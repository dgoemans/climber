module Core {
    export class EntityFactory {

        injector: Injector;

        constructor(injector: Injector) {
            this.injector = injector;
        }


        public createEntity(game: Phaser.Game, config: any) : Entity {
            let entity = new Entity(this.injector);

            entity.configure(game, config);

            return entity;
        }

    }
}