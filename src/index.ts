//require("./assets/css/styles.scss")
require('./index');

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Marc' world!");

document.body.style.color = '#0000FF';  