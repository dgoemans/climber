module Core {
    export class Component {

        protected gameObject: Entity;

        constructor(gameObject: Entity) {
            this.gameObject = gameObject;
        }

        public sendMessage(message: string): void {
            if(this[message] !== undefined) {
                this[message]();
            }            
        }

    }
}