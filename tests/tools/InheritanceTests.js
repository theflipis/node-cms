// HEREDABLE CON new()
// A no existe hasta llamar a new
var A = function() {
	var self = this;
	this.cosa = function() {
		console.log(self.constructor);
	}	
}

// NO HEREDABLE CON new()
// B existe en el contexto
var B = new function() {
	var self = this;
	this.cosa = function() {
		console.log(self.constructor);
	}
}

// NO HEREDABLE CON new()
// C existe debido al (); del final
var C = function() {
	var self = this;
	this.cosa = function() {
		console.log(self.constructor);
	}
}();

var testA = new A();
// var testA2 = A; //Falla
var testB = B;	// Correcto
// var testB2 = new B();	// Error
// var testB3 = B();	// Error
// var testC = new C();	// Error
// var testC2 = C();	// Error
var testC3 = C;	// Correcto

testA.cosa();
testA2.cosa();
testB.cosa();
testB2.cosa();
