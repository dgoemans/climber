module Core {
    export class Component implements Core.Updateable {

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

        public update(): void {
            
        }

    }
}