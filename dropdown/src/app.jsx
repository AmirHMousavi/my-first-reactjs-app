var React = require('react');
var DropDown = require('./dropdown.jsx');

var options={
  title:'Choose a dessert',//the title of the dropdown button
  itmes:[//list of items
    'Apple pie',
    'Peach Cobbler',
    'Coconut Cream pie'
  ]
};

//ask react to render this class
var element = React.createElement(DropDown, options);

//after rendering, tell where to place the rendered class in the DOM
ReactDOM.render(element, document.querySelector('.container'));
