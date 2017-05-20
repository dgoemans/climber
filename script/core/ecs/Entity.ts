module Core {
    export class Entity {

        private components: Component[];

        protected sprite: Phaser.Sprite;

        public name: string;

        constructor() {
            this.components = [];
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
                this.addSprite(game, game.world, config.x, config.y, config.type);
            }

            if(config.components !== undefined)
            {
                config.components.forEach(componentConfig => {
                    let constructionArgs = [];
                    
                    constructionArgs.push(null);

                    constructionArgs.push(this);
                    
                    constructionArgs.push(game);

                    if(componentConfig.args !== undefined)
                    {
                        constructionArgs.concat(componentConfig.args);
                    }

                    let component = new (Function.prototype.bind.apply(window[componentConfig.module][componentConfig.type], constructionArgs));
                    
                    this.addComponent(component);
                });
            }
        }
    }
}