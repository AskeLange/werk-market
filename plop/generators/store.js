

module.exports = function global (srcDirectory, plopDirectory) {
	return {
		description: 'Generates a store namespace.',
		prompts: [
			{	
				type: 'input',
				name: 'name',
				message: 'Name your store.',
			},
		],

		actions() {
			return [{
				type: 'add',
				path: `${srcDirectory}/store/{{dashCase name}}.js`,
				templateFile: `${plopDirectory}/templates/store.hbs`,
			}];
		} 
	};
};
