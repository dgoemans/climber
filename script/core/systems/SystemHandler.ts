module Core {
    export class SystemHandler extends Singleton {

        systems: Array<System>;

        constructor(){
            super();

            this.systems = [];
        }

        public register(system: System): void {
            this.systems.push(system);
        }

        public getSystem(type: any): any {

            for(let system of this.systems) {
                if(system instanceof type)
                {
                    return system;
                }
            }

            return null;
        }

        public update(): void{
            for(let name in this.systems)
            {
                this.systems[name].update();
            }
        }
    }
}