module Core {
    export class Entity {

        private components: Component[];

        constructor() {
        }

        protected addComponent(component: Component) : void {
            this.components.push(component);
        }

        public sendMessage(message: string) : void {
            for(let component of this.components){
                component.sendMessage(message);
            }
        }
    }
}