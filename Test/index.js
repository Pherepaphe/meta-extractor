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


/*////////////////////////////////MAIN END/////////////////////////////////////////*/










// var cheerio = require("cheerio");
// var request = require("request");
// var prompt  = require("prompt");
//     colors  = require('colors');
// var scrape  = require('html-metadata');  
// var scrape  = require('scrape');  
// var fs 		  = require('fs');
// //    optimist = require('optimist')

// //     set the overrides to skip the prompt - In Progress
// // prompt.override = optimist.argv

// /*multi url input*/
// // var urls = [...];

//   /*prompt schema*/
// var schema = {
//   properties: {
//     url: {
//       required: true,
//       format: 'url'
//     },
//   }
// };
 

//   //Start the Prompt//
// prompt.start();

// prompt.get(schema, function(err, result){
// var options = {};

//   /*output prompt to user*/
//   console.log('Command-line input received:');
//   console.log('  url: ' + result.url);


//   // node debug resultdata.js;
 
//   /*set options */
//   options.url = result.url;

//     /*get url from user console response */
//     scrape(options);

//     use html-metadata to extract the desired information about the url
//   scrape(options.url, function(error, metadata){
//   console.log(metadata);
//   });
// });



  //    /*output to file*/
  // fs.writeFile('urlresults.txt', ' url: ' + result.url), function (err) {
  //   if (err) return console.log(err);
  //   console.log('url > urlresults.txt');
  // });

  // // $("meta[type='*']").each(function(){
  // // do stuff..
  //  })


  // // fs.writeFile("/tmp/test", "Hey there!", function(err) {
  // //     if(err) {
  // //         return console.log(err);
  // //     }

  // //     console.log("The file was saved!");
  // // }); 



