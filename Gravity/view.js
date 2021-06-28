console.log("LOADING view");
export class View {
    constructor (app) {
        this.app = app;
        this.can;
        this.con;
        this.bcr;
    }
    initialize(callback) {
        this.can = document.getElementById("can");
        this.con = can.getContext("2d");
        window.onresize = this.resize.bind(this);
        this.resize();
        callback();
    }
    resize() {
        this.bcr = document.body.getBoundingClientRect();
        this.can.width = this.bcr.width;
        this.can.height = this.bcr.height;
    }

    run(callback) {
        callback();
    }
}