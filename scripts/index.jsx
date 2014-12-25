var React = require('react'),
    bootstrap = require('react-bootstrap'),
    Tagger = require('./Tagger');

require('./styles/vendor');
require('./styles/custom');
require('./styles/dev');

var view = (
    <div>
        <Tagger/>
    </div>
);

React.render(view, document.getElementById('wrapper'));