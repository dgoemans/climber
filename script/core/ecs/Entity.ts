module Core {
    export class Entity {

        private components: Component[];

        constructor() {
            this.components = [];
        }

        protected addComponent(component: Component) : void {
            this.components.push(component);
        }

        public sendMessage(...args: any[]) : void {
            for(let component of this.components){
                component.sendMessage.apply(component, args);
            }
        }
    }
}