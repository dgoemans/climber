module Climber {
    export class AIMovement extends Core.Component {
        protected sprite: Phaser.Sprite;
        private direction: Direction;

        constructor(gameObject: Core.Entity, game: Phaser.Game, startDirection: Direction) {
            super(gameObject);
            this.direction = startDirection;
            this.sprite = gameObject.getSprite();
        }

        private hitWall(tile? : Phaser.Tile): void {

            if(this.gameObject.getSprite().body.blocked.right)
            {
                this.direction = Direction.Left;
            }
            else if(this.gameObject.getSprite().body.blocked.left)
            {
                this.direction = Direction.Right;
            }
            
        }

        private hitEntity(entity : Core.Entity): void {

            switch(this.direction)
            {
                case Direction.Left:
                    this.direction = Direction.Right;
                    break;
                case Direction.Right:
                    this.direction = Direction.Left;
                    break;
            }
            
        }

        public update(): void {
            if(this.direction === Direction.Left){
                this.sprite.body.velocity.x = -200;
            }

            if(this.direction === Direction.Right){
                this.sprite.body.velocity.x = 200;
            }
        }
    }
}