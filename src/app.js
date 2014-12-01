/** @jsx React.DOM */
var React = require('react');

var mountNode = document.body;


var strings = require('strings');



var WordCloudApp = React.createClass({

  render: function() {
    return (
      <h1>{strings.title}</h1>
      <div id="app">
      </div>

    );
  }

});


React.renderComponent(WordCloudApp, mountNode);