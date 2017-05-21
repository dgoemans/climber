module Climber {
    enum Direction {
        Left = 1 ,
        Right,
        None
    }
    export class CharacterMovement extends Core.Component {
        private position: Phaser.Point;
        protected sprite: Phaser.Sprite;
        private direction: number;

        constructor(gameObject: Core.Entity, game: Phaser.Game, startDirection: number, startVelocity: number) {
            super(gameObject);
            this.position = new Phaser.Point(100, 100);
            this.direction = startDirection;
            this.sprite = gameObject.getSprite();
            this.sprite.body.velocity.x = startVelocity;
        }

        private jump(first: string, second: string): void {
            console.log("Jump received", first, second);
        }

        private left(): void {
            console.log("Left received");
            this.direction = Direction.Left;
            // position.x -= 4;
            this.position.x -= 5;
            this.gameObject.sendMessage("updatePosition", this.position);
        }

        private right(): void {
            console.log("Right received");
            this.direction = Direction.Right;
            this.position.x += 5;
            this.gameObject.sendMessage("updatePosition", this.position);
        }

        private stop(): void {
            console.log("stop received");
            this.direction = Direction.None;
        }

        private changeDirection(direction: number): void {
            console.log("changeDirection received");
            this.direction = direction;
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