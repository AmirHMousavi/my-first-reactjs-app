var React = require('react');
var Thumbnail = require('./thumbnail.jsx')

module.exports = React.createClass({
  render: function(){
     var list=this.props.data.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps}/>
    });
    return <div>
        {list}
    </div>
  }
});
