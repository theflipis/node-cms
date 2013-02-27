var FileTools = require("../../classes/tools/FileTools.js").FileTools;

/**
 * TPLParser class. Contains the methods required to transform a template
 * into HTML.
 */
function TPLParser() {
	this.fTools = new FileTools(), 
	this.pregTPLTag = /\{\{ ([A-Za-z0-9_\.:-]){0,} \}\}/g, 
	/**
	 * This method parses the template to HTML
	 * @param tplName The template file to parse
	 * @param tplVars The variables to assign to the template
	 */
	this.parseTPL = function(tplName, tplVars) {
		var tplRaw = this.fTools.readFile(tplName);
		if (tplVars == undefined) {
			return tplRaw;
		}// No entry vars
		var matches = tplRaw.match(this.pregTPLTag);
		// No tag matches
		if (matches == null) {
			return false;
		}
		for (var j = 0; j < matches.length; j++) {
			for (var i = 0; i < tplVars.length; i++) {
				if ( typeof (tplVars[i]) !== "function") {
					if ("{{ " + tplVars[i].name + " }}" == matches[j]) {
						tplRaw = tplRaw.replace(matches[j], tplVars[i].data);
					}
				} else {
					tplRaw = tplRaw.replace(matches[j], call(tplVars[i].data));
				}
			}
		}
		return tplRaw;
	}
}

module.exports.TPLParser = TPLParser;
