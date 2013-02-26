var fs = require("fs");

function FileTools (encoding) {
	var theEncoding = (encoding !== undefined) ? encoding : 'utf8';	
	var checkEncoding = function() {
		if(theEncoding !== undefined && theEncoding !== null) {
			if(theEncoding !== 'utf8') {
				theEncoding = "base64";
			} else {
				theEncoding = "utf8";
			}					
		}				
	};	
	
	this.readFile = function(filename) {
		return fs.readFileSync(filename, theEncoding);
	},
	this.writeFile = function(filename, contents) {
		return fs.writeFileSync(filename, contents, theEncoding);
	},
	this.setEncoding = function(encoding) {
		theEncoding = encoding;
		checkEncoding();				
	},
	this.getEncoding = function() {
		return theEncoding;
	}
}

module.exports.FileTools = FileTools;
