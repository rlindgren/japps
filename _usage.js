function three_divs () {
	out = [];
	for (var i=0; i<3; i++) {
		out.push(div({'id': (i + 1) + "of3", 'class': 'three_divs'}))
	}
	return out
}

var header = fragment(
	div({'id': 'header', 
		'class': 'grid_12'},
		p({'id': 'test_text', 
			'text': 'text': "This is a 'p' element"}) ), 
	div(), 
	div()
);

header(
	$('#header').className('grid')
);