module Climber {
    export class CharacterAnimation extends Core.Component {
        
        protected sprite: Phaser.Sprite;
        private direction: Direction;
        private sheetname: string;

        constructor(gameObject: Core.Entity, game: Phaser.Game, width: number, height: number, sheetname: string) {
            super(gameObject);
            this.sprite = gameObject.getSprite();
            this.direction = Direction.None;
            this.sprite.width = width;
            this.sprite.height = height;
            this.sheetname = sheetname;
        }

        private jump(first: string, second: string): void {
            this.sprite.frameName = this.sheetname + "_jump.png";
        }

        private left(): void {
            this.sprite.frameName = this.sheetname + "_walk1.png";
            this.direction = Direction.Left;
        }

        private right(): void {
            this.sprite.frameName = this.sheetname + "_walk1.png";
            this.direction = Direction.Right;
        }

        private stop(): void {
            this.sprite.frameName = this.sheetname + "_stand.png";
            this.direction = Direction.None;
        }

        public update(): void {
        }
    }
}