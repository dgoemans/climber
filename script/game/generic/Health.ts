module Climber {
    export class Health extends Core.Component {

        private health: number;

        constructor(gameObject: Core.Entity, startingHealth: number) {
            super(gameObject);            

            this.health = startingHealth || 1;
        }

        private damage(): void {
            console.log('------>damage received');
            this.health--;

            if(this.health === 0)
            {
                this.gameObject.sendMessage("killCharacter");
            }
        }
    }
}