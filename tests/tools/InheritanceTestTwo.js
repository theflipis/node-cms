function TestClassA() {
	this.propiedad1 = "cosa",
	console.log(this.constructor);	
}

// Se altera para todas las instancias de clase
TestClassA.prototype.propiedad2 = "mesa";

TestClassA.prototype.metodo1 = function() {
	console.log('Objeto: ' + this.constructor);
	console.log('Propiedad1: ' + this.propiedad1);
}

// Altera la propiedad para todas las instancias de la clase
TestClassA.prototype.metodo2 = function() {
	this.propiedad2 = "lalalalala";
	console.log('Objeto: ' + this.constructor);
	console.log('Propiedad2: ' + this.propiedad2);
}

var test = new TestClassA();
var test2 = new TestClassA();
test.metodo1();
test.metodo2();
test2.metodo1();
test2.metodo2();

console.log(test.propiedad2);
console.log(test2.propiedad2);
