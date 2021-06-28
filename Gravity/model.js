import { Planet } from "./planet.js";
console.log("LOADING model");
export class Model {

    constructor(app) {
        this.app = app;
        this.planets;
        this.NUM_PLANETS = 5;
    }

    initialize(callback) {
        callback();
    }

    run(callback) {
        this.planets = [];
        for (var i = 0; i < this.NUM_PLANETS; i++){
            this.planets.push(
                new Planet(
                    this.app.view.con,
                    this.app.view.bcr,
                    0.5,
                    0.5,
                    0.01,
                    0.01,
                    0.1,
                    "red"
                )
            );
        }
        callback();
    }
}