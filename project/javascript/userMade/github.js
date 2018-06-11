var page = require('webpage').create();
page.open('http://localhost:3000/graph', function() {
  setTimeout(function(){
  	page.render('github.png');
  	phantom.exit();
  },5000);

  
});
