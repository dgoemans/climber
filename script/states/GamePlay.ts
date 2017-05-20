module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;
        
        private levelBuilder: LevelBuilder;
        
        private character: Core.Entity;
        private npCharacter: Core.Entity;

        private entityFactory: Core.EntityFactory;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';

            this.levelBuilder = new LevelBuilder(this.game);

            this.entityFactory = new Core.EntityFactory();

            this.character = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('playerCharacterConfig'));            
            this.npCharacter = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('AICharacterConfig'));

            // this.npCharacter.getSprite().body.onCollide = new Phaser.Signal();
            // this.npCharacter.getSprite().body.onCollide.add(this.collision, this);

        }

       /* public collision(sprite1: Phaser.Sprite, sprite2: Phaser.Sprite): void {
            sprite1.visible = !sprite1.visible;
            if(sprite1.key === 'star' && sprite1.body.wasTouching.left){
                this.npCharacter.sendMessage('onLeftHit');
                console.log(sprite1.body.wasTouching.left, sprite1.body.wasTouching.right);
                console.log('bpdy2', sprite2.body.wasTouching.left, sprite2.body.wasTouching.right);
            }

            if(sprite1.key === 'star' && sprite1.body.wasTouching.right){
                this.npCharacter.sendMessage('onRightHit');
            }
        }*/

        public preload():void {
            let level = this.levelBuilder.buildLevel("test_1");

            this.game.world.resize(level.sizeInPixels.x, level.sizeInPixels.y);

            this.game.camera.follow(this.character.getSprite());

            // this.character.getSprite().position.copyFrom(level.startPosition);
            
            level.tiles.forEach(tile => {

                let brick = this.entityFactory.createEntity(this.game, this.game.cache.getJSON('brickConfig'));            

                brick.getSprite().position.set(tile.x * tile.width, tile.y * tile.height);
                
            });
        }

        public update(): void {
            this.character.update();
            this.game.physics.arcade.collide(this.character.getSprite(), this.npCharacter.getSprite());
        }

        public render() {
        }


    }
}
