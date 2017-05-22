module Climber {
    export class DamageOnCollision extends Core.Component {

        constructor(gameObject: Core.Entity) {
            super(gameObject);            
        }

        private hitEntity(other: Core.Entity): void {
            console.log('hit entity received', other.name);
            other.sendMessage("damage");
        }
    }
}