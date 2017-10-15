require("./assets/css/styles.scss")
require("./assets/css/simple-grid.scss")
require("./assets/css/zc-grid.css")
//require("./assets/css/reset.css")
require('./index.html');

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Marc' worldc!");

document.body.style.color = '#00FF00';
