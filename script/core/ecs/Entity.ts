module Core {
    export class Entity {

        private components: Component[];

        protected sprite: Phaser.Sprite;

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
    }
}