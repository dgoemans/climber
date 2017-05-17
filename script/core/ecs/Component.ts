module Core {
    export class Component {

        protected gameObject: Entity;

        constructor(gameObject: Entity) {
            this.gameObject = gameObject;
        }

        public sendMessage(...args: any[]): void {

            let method = args.shift();

            if(this[method] !== undefined) {
                this[method].apply(this, args);
            }            
        }

    }
}