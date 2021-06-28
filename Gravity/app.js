import { Model } from "./model.js";
import { View } from "./view.js";
import { Controller } from "./controller.js";
console.log("LOADING app");
export class App {

    constructor () {
        this.model = new Model(this);
        this.view = new View(this);
        this.controller = new Controller(this);

    }

    animate() {
        //make animation loop
    }

    initialize(callback) {
        this.model.initialize( () => {
            this.view.initialize( () => {
                this.controller.initialize(callback);
            });
        } );
    }

    run() {
        this.model.run( () => {
            this.view.run( () => {
                this.controller.run(animate);
            });
        } );
    }

}