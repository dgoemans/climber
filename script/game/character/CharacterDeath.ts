module Climber {
    export class CharacterDeath extends Core.Component {
        public sprite: Phaser.Sprite;

        constructor(gameObject: Core.Entity) {
            super(gameObject);
            this.sprite = this.gameObject.getSprite();
        }

        private killCharacter(): void {
            this.destroyCharacter();
        }
        private destroyCharacter() : void {
            this.sprite.alpha = 0;
            this.gameObject.sendMessage("toggleBody", false);
        }

    }
}