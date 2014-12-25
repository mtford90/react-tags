var React = require('react'),
    app = require('./app');

require('./styles/vendor');
require('./styles/custom');
require('./styles/dev');



React.render(app, document.getElementById('wrapper'));