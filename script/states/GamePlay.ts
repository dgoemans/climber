module Climber {
    export class GamePlay extends Phaser.State {
        
        public game: Phaser.Game;

        private levelBuilder: LevelBuilder;
        
        private character: Core.Entity;
        private npCharacter: Core.Entity;

        private entityFactory: Core.EntityFactory;

        private level: Level;

        private systemHandler: Core.SystemHandler;

        constructor() {
            super();
        }

        public init():void {
            this.game.stage.backgroundColor = '#bab397';

            this.levelBuilder = new LevelBuilder(this.game);

            this.entityFactory = new Core.EntityFactory();

            this.systemHandler = Core.SystemHandler.getInstance();
            this.systemHandler.register(new CollisionDispatcher(this.game));

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
            this.level = this.levelBuilder.buildLevel("test_1");

            this.systemHandler.getSystem(CollisionDispatcher).registerLevel(this.level);

            this.game.camera.follow(this.character.getSprite());

            this.character.getSprite().position.copyFrom(this.level.startPosition);

            this.npCharacter.getSprite().position.copyFrom(this.level.aiSpawns[0]);
        }

        public update(): void {
            this.systemHandler.update();
            this.character.update();
            this.npCharacter.update();
        }

        

        public render() {
        }


    }
}
