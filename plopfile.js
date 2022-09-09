
// Imports
const plopNpmrc = require('./plop/generators/npmrc.js');
const plopStore = require('./plop/generators/store.js');
const plopLayout = require('./plop/generators/layout.js');
const plopPage = require('./plop/generators/page.js');
const plopGlobal = require('./plop/generators/component.js');
const plopBlock = require('./plop/generators/block.js');

// Configuration
const srcDirectory = './';
const plopDirectory = './plop';

// Exports
module.exports = function(plop) {

	plop.setGenerator(
		'npmrc',
		plopNpmrc(
			srcDirectory, 
			plopDirectory
		)
	);

	plop.setGenerator(
		'store',
		plopStore(
			srcDirectory, 
			plopDirectory
		)
	);

	plop.setGenerator(
		'layout',
		plopLayout(
			srcDirectory, 
			plopDirectory
		)
	);

	plop.setGenerator(
		'page',
		plopPage(
			srcDirectory, 
			plopDirectory
		)
	),

	plop.setGenerator(
		'component',
		plopGlobal(
			srcDirectory, 
			plopDirectory
		)
	);

	plop.setGenerator(
		'block',
		plopBlock(
			srcDirectory, 
			plopDirectory
		)
	);

};