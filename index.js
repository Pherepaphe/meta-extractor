var cheerio = require("cheerio");
var request = require("request");
var prompt  = require("prompt");
    colors  = require('colors');
var scrape  = require('html-metadata');    
//    optimist = require('optimist')

//     set the overrides to skip the prompt - In Progress
// prompt.override = optimist.argv

  /*prompt schema*/
var schema = {
  properties: {
    url: {
      required: true,
      format: 'url'
    },
  }
};
 
  //Start the Prompt//
prompt.start();

prompt.get(schema, function(err, result){
var options = {};

  /*output prompt to user*/
  console.log('Command-line input received:');
    console.log('  url: ' + result.url);
 
    /*set options */
    options.url = result.url;

    /*get url from user console response */
    scrape(options);

    /*use html-metadata to extract the desired information about the url*/
  scrape(options.url, function(error, metadata){
  console.log(metadata);
  });
});

