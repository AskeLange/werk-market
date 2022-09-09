

module.exports = function global (srcDirectory, plopDirectory) {
	return {
		description: 'Generates a layout.',
		prompts: [
			{	
				type: 'input',
				name: 'name',
				message: 'Name your layout.',
			},
		],

		actions() {
			return [{
				type: 'add',
				path: `${srcDirectory}/layouts/{{dashCase name}}.vue`,
				templateFile: `${plopDirectory}/templates/layout.hbs`,
			}];
		} 
	};
};
