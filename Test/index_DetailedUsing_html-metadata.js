var cheerio   = require("cheerio");
var request   = require("request");
var prompt    = require("prompt");
    colors    = require('colors');
var scrape    = require('html-metadata');    
var preq      = require('preq'); // Promisified Request library
var BBPromise = require('bluebird');
var index     = require('./lib/index.js');
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
 
 /**
 * Default exported function that takes a url string or
 * request library options object and returns a
 * BBPromise for all available metadata
 *
 * @param  {Object}   urlOrOpts  url String or options Object
 * @param  {Function} [callback] Optional callback
 * @return {Object}              BBPromise for metadata
 */
exports = module.exports = function(urlOrOpts, callback) {
  return preq.get(urlOrOpts
  ).then(function(response) {
    return index.parseAll(cheerio.load(response.body));
  }).nodeify(callback);
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

    /**
 * Global exportable list of scraping promises with string keys
 * @type {Object}
 */
  exports.metadataFunctions = index.metadataFunctions;

    /*use html-metadata to extract the desired information about the url*/
  scrape(options.url, function(error, metadata){
  console.log(metadata);


  });
});

