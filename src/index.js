// lodash.js => lodash/index.js
const _ = require('lodash');
import './css/style.css';
import './css/hello.scss';
// named import : 반드시 {} 안에 동일한 이름으로 import
import {area} from './js/circle';

// default import; : {}가 없고 이름을 바꿀 수 있다.
import cube from './js/cube';

const component = () => {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

console.log('!!!!!!!!!!', area(5));
console.log('default import: ', cube(5));

document.body.appendChild(component());