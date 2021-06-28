console.log("LOADING controller");
export class Controller {
    constructor (app) {
        this.app = app;
    }
    initialize(callback) {
        callback();
    }

    run(callback) {
        callback();
    }
}