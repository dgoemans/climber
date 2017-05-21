///<reference path='Component.ts' />
module Core {
    export class Entity implements Core.Updateable {

        private components: Component[];

        protected sprite: Phaser.Sprite;

        public name: string;

        private injector: Core.Injector;

        constructor(injector) {
            this.components = [];
            this.injector = injector;
        }

        protected addSprite(game: Phaser.Game, parent: Phaser.Group, x: number, y: number, type: string ): void {

            this.sprite = new Phaser.Sprite(game, x, y, type);
            parent.add(this.sprite);
        }

        protected addComponent(component: Component) : void {
            this.components.push(component);
        }

        public getSprite() : Phaser.Sprite {
            return this.sprite;
        }

        public sendMessage(...args: any[]) : void {
            this.components.forEach(component => {
                component.sendMessage.apply(component, args);
            });
        }

        public getComponent(type: any): any{

            for(let component of this.components) {
                if(component instanceof type)
                {
                    return component;
                }
            }

            return null;
        }

        public update():void{
            this.components.forEach(component => {
                component.update();
            });
        }

        public configure(game: Phaser.Game, config: any): void {
            this.name = config.name;

            if(config.sprite !== undefined)
            {
                this.addSprite(game, game.world, config.sprite.x, config.sprite.y, config.sprite.type);
            }

            if(config.components !== undefined)
            {
                config.components.forEach(componentConfig => {
                    let constructionArgs = [];

                    // This setup is too similar to what the injector does, but we have to manually register all components
                    let objectConstructor = window[componentConfig.module][componentConfig.type];

                    constructionArgs.push(null);

                    constructionArgs.push(this);

                    let resolvedArgs = Helpers.getArgs(objectConstructor);

                    for(let argument of resolvedArgs) {
                        if(this.injector.has(argument)){
                            constructionArgs.push(this.injector.resolve(argument));
                        }
                    }

                    if(componentConfig.args !== undefined)
                    {
                        constructionArgs = constructionArgs.concat(componentConfig.args);
                    }


                    let component = new (Function.prototype.bind.apply(objectConstructor, constructionArgs));
                
                    this.addComponent(component);
                });
            }
        }
    }
}