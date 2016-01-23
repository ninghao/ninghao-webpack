var name = require('./name');

require('style!css!./style.css')

document.getElementById('app').textContent = 'hello ~' + name;
