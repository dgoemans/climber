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

        public resolve(name: string, ...customArguments: Object[]): Object {

            let dependency = this.dependencies[name];

            if(typeof dependency ===  "function")
            {
                let resolvedArgs = Helpers.getArgs(dependency);
                let constructionArgs = [];

                // Push null, since we're going to apply on a constructor, and at that point the context isn't important
                constructionArgs.push(null); 

                for(let argument of resolvedArgs) {
                    if(this.has(argument)){
                        constructionArgs.push(this.resolve(argument));
                    }
                }

                constructionArgs = constructionArgs.concat(customArguments);

                return new (Function.prototype.bind.apply(dependency, constructionArgs));
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

        public deregister(name: string) {
            delete this.dependencies[name];
        }

    }
}