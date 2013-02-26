var fTools = require("../../classes/tools/FileTools.js").FileTools;
var fReader = new fTools();
var HumanJSON = JSON.parse(fReader.readFile("/home/alejandro.almunia/CODE/nodeCode/d20Game/data/game/Human.json"));
console.log(HumanJSON);
var contentWritable = fReader.readFile("../../classes/tools/TPLParser.js");
fReader.writeFile("TestWriteUTF8.js", contentWritable);
fReader.setEncoding("base64");
fReader.writeFile("TestWriteBase64.js", contentWritable);