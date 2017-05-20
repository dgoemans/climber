module Core {
    export class Singleton {

        private static instance = null;

        constructor() {
        }

        public static getInstance() {
            if(this.instance === null)
            {
                this.instance = new this();
            }

            return this.instance;
        }
    }
}