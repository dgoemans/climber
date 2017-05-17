module Climber {
    export class DamageOnCollision extends Core.Component {

        constructor(gameObject: Core.Entity) {
            super(gameObject);            
        }

        private collide(other: Core.Entity): void {
            other.sendMessage("damage");
        }
    }
}