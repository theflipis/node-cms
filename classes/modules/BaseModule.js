function cloneObject(obj) {
	var returnObj = {};
	for(var i in obj) {
		returnObj[i] = obj[i];
	}
	returnObj.constructor = obj.constructor;	// Para que identifique la clase... pero así no hay herencia que valga... todos son la clase padre...
	return returnObj;
}

function BaseModule(namespace) {
	this.namespace = namespace,
	this.deployContext = {"isBase": false,
						  "xPos": 0,
						  "yPos": 0,
						  "tplUsed": "",
						  "cssUsed" : ""},	 	
	this.render = function() {
		if(this.namespace === undefined) {
			throw "No namespace for module";
		}
		if(this.deployContext === null) {
			throw "No deployContext for module";
		}
		console.log("Renderizando contenido de módulo... ");
	}
};


/* var test1 = new BaseModule();
test1.test1();
test1.function1();

var test = cloneObject(new BaseModule());

test.cosa = function() {
	console.log("cosa cosa");
}

test.test1();
test.function1();
test.cosa();

console.log(test); */

// console.log(BaseModule);
/* var newBaseModule = new BaseModule();
newBaseModule.doSomething = function() {
	this.render();
} */

var newBaseModule2 = new BaseModule("aalmunia");
newBaseModule2.doSomethingElse = function() {
	this.deployContext = {"cosa": "mesa", "casa": "cesta", "misa": "masa"};
	this.render();	
}

newBaseModule2.doSomethingElse();
console.log(newBaseModule2);