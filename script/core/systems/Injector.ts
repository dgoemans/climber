///<reference path='System.ts' />
module Core {
    export class Injector extends System {

        private dependencies: Object;

        constructor() {
            super();
            this.dependencies = {};

            this.register("injector", this);
        }

        //todo togglable and as a message
        public register(name: string, dependency: Object): void {
            this.dependencies[name] = dependency;
        }

        public has(name: string): boolean {
            return Object.keys(this.dependencies).indexOf(name) !== -1;
        }

        public resolve(name: string): Object {

            let dependency = this.dependencies[name];

            if(typeof dependency ===  "function")
            {
                return new dependency();
            }
            else if(typeof dependency === "object")
            {
                return dependency;
            }
            else
            {
                console.error("Trying to resolve something that isn't registered");
                return null;
            }

        }

    }
}