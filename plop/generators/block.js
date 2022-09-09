

module.exports = function global (srcDirectory, plopDirectory) {
	return {
		description: 'Generates a block.',
		prompts: [
			{	
				type: 'input',
				name: 'name',
				message: 'Name your block.',
			},
		],

		actions() {
			return [{
				type: 'add',
				path: `${srcDirectory}/components/blocks/{{properCase name}}.vue`,
				templateFile: `${plopDirectory}/templates/block.hbs`,
			}];
		} 
	};
};
