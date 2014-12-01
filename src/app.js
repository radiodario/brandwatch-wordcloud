/** @jsx React.DOM */
var React = require('react');

var mountNode = document.body;
var Details = require('./details');


var strings = require('./strings');


var wordcloud = require('./wordcloud');

var WordCloudApp = React.createClass({

  getInitialState: function() {
    return {
      topic: false
    };
  },

  render: function() {
    return (
      <div id="app" >
        <div className="header">
          <div className="titleBox">
            <h1>{strings.title}</h1>
          </div>
        </div>
        <div className="container">
          <div className="wordcloud">
            <svg id="wordcloud"/>
          </div>
          <Details topic={this.state.topic} />
        </div>
      </div>
    );
  },

  clickHandler : function(topic) {
    this.setState({
      topic: topic
    });
  },


  componentDidMount: function() {

    wordcloud.init(this.getDOMNode(), this.clickHandler);


  }

});


React.render(<WordCloudApp />, mountNode);