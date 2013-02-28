var Base = require('../../classes/tools/Base.js').Base;
var objetoNuevo =  Base.extend({
	constructor: null,
	propiedad: "cosa",
	this.extend({
		test: function() {
			console.log(propiedad1);
			console.log(this.propiedad1);		
		}		
	});	
});
console.log(objetoNuevo);
objetoNuevo.test();
