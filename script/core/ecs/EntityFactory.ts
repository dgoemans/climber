module Core {
    export class EntityFactory {

        /*
        Sample JSON for an entity
{
    "name": "Climber.Character",
    "sprite": {
        "x": 0,
        "y": 0,
        "type": "star"
    }
    "components": [
        {
            "module": "Climber",
            "type": "KeyboardInput",
            "args": []
    ]
}

        */

        constructor() {
            
        }


        public createEntity(game: Phaser.Game, config: any) : Entity {
            let entity = new Entity();

            entity.configure(game, config);

            return entity;
        }

    }
}