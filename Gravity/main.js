import { App } from "./app.js";
console.log("LOADING Main");

window.onload = () => {
    var app = new App();
    app.initialize(app.run);
}