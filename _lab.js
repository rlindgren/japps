
function $ (identifier) {
	if (identifier[0] === '#') {
		return document.querySelector(identifier);
	} else {
		return document.querySelectorAll(identifier);
	}
} 

// create a generic div
function div (options) {
	var el = document.createElement('div'), key;
	if (options) {
		el.id = options.id;
		el.className = options.className || options.classList || options.class || null
		for (key in options.style) {
			el.style[key] = options.style[key];
		}
	}
	return el
}

function fragment () {
	var d = document.createDocumentFragment(), k=0;
	if (arguments[0] instanceof Function) {
		var argsArray = (arguments[0]());
		for (; k<argsArray.length; k++) {
			d.appendChild(argsArray[k]);
		}
		return d;
	} else if (arguments[0] instanceof Array) {
		for (k=0; k<arguments[0].length; k++) {
			d.appendChild(arguments[0][k]);
		}
		return d;
	} else if (arguments[0]) {
		for (k=0; k<arguments.length; k++) {
			d.appendChild(arguments[k]);
		}
		return d;
	} else { return d; }
}