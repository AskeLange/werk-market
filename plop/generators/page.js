

module.exports = function global (srcDirectory, plopDirectory) {
	return {
		description: 'Generates a page.',
		prompts: [
			{	
				type: 'input',
				name: 'directory',
				message: 'Specify the page directory - leave blank for default.',
			},
			{	
				type: 'input',
				name: 'name',
				message: 'Name your page.',
			},
		],

		actions({ directory, name }) {
			
			// Enables slugs in directory.
			const _directory = directory.match(/^_.*/g) 
				? '_{{dashCase directory}}'
				: '{{dashCase directory}}';

			// Enables slugs in name.
			const _name = name.match(/^_.*/g) 
				? '_{{dashCase name}}'
				: '{{dashCase name}}';
			
			// Returns
			return [{
				type: 'add',
				path: `${srcDirectory}/pages/${_directory}/${_name}.vue`,
				templateFile: `${plopDirectory}/templates/page.hbs`,
			}];

		} 
	};
};
