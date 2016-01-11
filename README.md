#meta-extractor

This project will prompt you from a node server to enter a url and output the meta tag information.

### Setup
 - Clone the repo `git clone https://github.com/Pherepaphe/extract-n-read.git`
 - Run 'cd extract-n-read' 
 - Run `npm install`
 
 ###Execution
 - Run 'node index.js'
 - At the prompt, enter in the URL 
 - *Pending/WIP* - If you wish to bypass the prompt, you can include the url in the run command. Example: node index.js http://www.google.com
  

### Tech Used
- [Cheerio](https://github.com/cheeriojs/cheerio): Parse the XML/HTML
- [Request](https://github.com/request/request): HTTP request client
- [Prompt](https://github.com/flatiron/prompt): Command line prompt
- [scrape](https://www.npmjs.com/package/scrape): Scrape web pages
