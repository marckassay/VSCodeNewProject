import * as _ from "lodash";

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['hi', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());