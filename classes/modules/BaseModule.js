function cloneObject(obj) {	
	var returnObj = {};	
	for(var i in obj) {		
		returnObj[i] = obj[i];		
	}
	returnObj.constructor = obj.constructor;	
	return returnObj;		
}


function BaseModule() {
	this.cosa = "cosa",
	this.mesa = "mesa",
	this.casa = "casa",
	this.test1 = function() {
		console.log("test1 desde ");
		console.log(this.constructor);		
	},
	this.function1 = function() {
		console.log("function1 desde ");
		console.log(this.constructor);	
	} 			
} 

var test1 = new BaseModule();
test1.test1();
test1.function1();

var test = cloneObject(new BaseModule());

test.cosa = function() {
	console.log("cosa cosa");
}

test.test1();
test.function1();
test.cosa();


// test.prototype.funcion1();
console.log(test);

