module Climber {
    export class CollisionHandler extends Core.Component {

        constructor(gameObject: Core.Entity) {
            super(gameObject);            

            // TODO:
            //let system = getSystem("CollisionSystem");
            //system.register(gameObject);
        }

        private collisionWithEntity(other: Core.Entity): void {
            console.log("Collided with entity: ", other);
        }
    }
}