module Climber {
    export class CharacterMovement extends Core.Component {
        private position: Phaser.Point;
        protected sprite: Phaser.Sprite;
        private direction: Direction;

        constructor(gameObject: Core.Entity, game: Phaser.Game) {
            super(gameObject);
            this.direction = Direction.None;
            this.sprite = gameObject.getSprite();
        }

        private jump(first: string, second: string): void {
            console.log("Jump received", first, second);
            this.sprite.body.velocity.y = -600;
        }

        private left(): void {
            console.log("Left received");
            this.direction = Direction.Left;
        }

        private right(): void {
            console.log("Right received");
            this.direction = Direction.Right;
        }

        private stop(): void {
            console.log("stop received");
            this.direction = Direction.None;
        }

        public update(): void {
            if(this.direction === Direction.Left){
                this.sprite.body.velocity.x = -200;
            }

            if(this.direction === Direction.Right){
                this.sprite.body.velocity.x = 200;
            }

            if(this.direction === Direction.None){
                this.sprite.body.velocity.x = 0;
            }
        }
    }
}