import name from './name';

import './style.css';

let input = document.createElement('input');
document.getElementById('app').textContent = 'hello ~ ' + name;
document.getElementById('app').appendChild(input);
