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
