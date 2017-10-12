import * as _ from "lodash";

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['foo', 'webpack'], ' ');
  console.log("hello")
    return element;
}
  
document.body.appendChild(component());