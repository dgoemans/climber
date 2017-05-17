module Climber {
    export class Health extends Core.Component {

        private health: number;

        constructor(gameObject: Core.Entity) {
            super(gameObject);            

            this.health = 1;
        }

        private damage(): void {
            this.health--;

            if(this.health === 0)
            {
                this.gameObject.sendMessage("wantsToDie");
            }
        }
    }
}