/** @jsx React.DOM */
var React = require('react');
var strings = require('./strings');


var Details = React.createClass({

  render : function() {

    var topic = this.props.topic;

    if (topic) {
      return (
        <div className="details">
          <h3>{strings.det_title} "{topic.label}"</h3>
          <div>
            {strings.tot_mentions}:
            <span className="total number">{topic.volume || 0}</span>
          </div>
          <div>
            {strings.pos_mentions}:
            <span className="positive number">{topic.sentiment.positive || 0}</span>
          </div>
          <div>
            {strings.neu_mentions}:
            <span className="neutral number">{topic.sentiment.neutral || 0}</span>
          </div>
          <div>
            {strings.neg_mentions}:
            <span className="negative number">{topic.sentiment.negative || 0}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="details">
          <h3>{strings.click_for_details}</h3>
        </div>
      );
    }


  }


});

module.exports = Details;