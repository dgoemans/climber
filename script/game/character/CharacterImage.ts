module Climber {
    export class CharacterImage extends Core.Component {
        public game: Phaser.Game;
        private characterSprite: Phaser.Sprite;

        constructor(gameObject: Core.Entity, type: string, game: Phaser.Game) {
            super(gameObject);
            this.game = game;
            this.characterSprite = new Phaser.Sprite(this.game, 0, 0, type);
            this.game.add.existing(this.characterSprite);
            this.characterSprite.anchor.set(0.5, 0.5);
            this.characterSprite.scale.setTo(1, 1);

        }
        //updateposotion added
        private jump(): void {
            console.log("Jump received");
        }

        private left(): void {
            console.log("Left received");
            this.characterSprite.x -= 4;
        }

        private right(): void {
            console.log("Right received");
            this.characterSprite.x += 4;
        }

    }
}