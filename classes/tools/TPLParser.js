/**
 *
 * ESTRUCTURA BÁSICA CMS:
 *
 * - Existen módulos autocontenidos, con disparado de eventos y posibilidad de hacer 'deploy' de los mismos
 * en la aplicación.
 * - Los módulos deben estar acorde a una especificación dada, cumpliendo unos estándares de interfaz, para
 * poder procesarlos por lotes
 * - Un módulo individual tiene un layout propio, para que las URL tengan sentido al acceder a la app
 * - Usamos un backend de datos, sea MongoDB, MySQL, XML o ficheros de texto
 * - En este backend queda registrado el deployment de módulos para una URL dada.
 * - A través de los eventos disparados por cada módulo se interopera entre los mismos.
 * - Los eventos de cada módulo deben tener un namespace propio y único
 * - Debería existir un sistema de repositorio de módulos, de tal forma que podamos
 * descargarlos e integrarlos dentro de nuestra instalación del CMS
 * - Definiremos varias 'capas' de uso:
 *
 * 		- Usuario básico: Ve la página web e interactúa con ella
 * 		- Usuario diseñador / maquetador: Crea el HTML + CSS del módulo
 * 		- Usuario desarrollador: Crea el JS del módulo y lo eventos que se disparan
 * 		- Usuario administrador: Controla todo el CMS y es capaz de resolver los
 * 		problemas que surjan en el mismo (de momento, yo, Alejandro)
 *
 * - Existe un frontend a través del cual se hace deploy de módulos, cada
 * uno de ellos con su configuración. Cuadrícula y visual. (jQuery)
 * - Existe la posibilidad de poner varias veces el mismo módulo en una página
 * - Existen layouts por defecto para los elementos que no los tengan
 * - Todos los módulos son serializables a JSON, de tal forma que son transferibles
 * a través de HTTP.
 *
 */

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
