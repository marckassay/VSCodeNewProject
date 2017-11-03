require("./assets/css/svg-logos.scss")
require("./assets/css/simple-grid.scss")
require("./assets/css/launchpage.css")
require("./assets/css/pretty-code.css")
require("./assets/css/light-box.css")
require('./index.html');

class Greeter {
    constructor(public greeting: string) { }
    smile() {
        let h2 = document.createElement('h2');
        h2.textContent = this.greeting;
        return document.getElementById('typescript-chime-in').appendChild(h2);
    }
};

let greeter = new Greeter(':-)');
let beenGreeted = false;

document.body.addEventListener("mousemove", (ev) => {
    if(!beenGreeted) {
        greeter.smile();
        beenGreeted = true;
    }
});
