var options={
  data:[
        { title:'Tutorials ',
          number:32,
          header:'Learning ReactJS',
          description:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
          imageUrl:'https://assets.toptal.io/uploads/blog/category/logo/291/react.png'},
        { title:'Tutorials ',
          number:15,
          header:'Learning Gulp',
          description:'gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.',
          imageUrl:'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'}
      ]};

//ask react to render this class
var element = React.createElement(ThumbnailList, options);

//after rendering, tell where to place the rendered class in the DOM
ReactDOM.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return  React.createElement("button", {className: "btn btn-primary", type: "button"}, 
                    this.props.title, 
                  React.createElement("span", {className: "badge"}, this.props.number)
                )
    }
});

var ThumbnailList= React.createClass({displayName: "ThumbnailList",
  render: function(){
     var list=this.props.data.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    return React.createElement("div", null, 
        list
    )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "row"}, 
    React.createElement("div", {className: "col-sm-6 col-md-4"}, 
    React.createElement("div", {className: "thumbnail"}, 
              React.createElement("img", {src: this.props.imageUrl}), 
              React.createElement("div", {className: "caption"}, 
                React.createElement("h3", null, this.props.header), 
                React.createElement("p", null, this.props.description), 
                React.createElement("p", null, 
                React.createElement(Badge, {title: this.props.title, number: this.props.number})
                )
              )
           )))
  }
});
