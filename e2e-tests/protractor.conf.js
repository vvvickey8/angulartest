var HtmlReporter = require('protractor-html-screenshot-reporter');
//var ScreenShotReporter = require('protractor-screenshot-reporter');

var reporter=new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Demo Reporter',
    docName:    'protractor-demo-tests-report.html'
});
      
exports.config = {
  allScriptsTimeout: 11000,

//seleniumAddress: 'http://localhost:4444/wd/hub'
seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  specs: [ 
	'/e2e-tests/movielist_spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

 // baseUrl: 'http://localhost:/8000',
    baseUrl: serverConfig.BASE_URL,

  framework: 'jasmine',
  directConnect: true,
 seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
     showColors: true
    
  },
 
  
 
   onPrepare: function() {
	   jasmine.getEnv().addReporter(reporter);      
   }
};
