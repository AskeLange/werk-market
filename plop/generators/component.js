

module.exports = function global (srcDirectory, plopDirectory) {
	return {
		description: 'Generates a component.',
		prompts: [
			{	
				type: 'input',
				name: 'name',
				message: 'Name your component.',
			},
		],

		actions() {
			return [{
				type: 'add',
				path: `${srcDirectory}/components/global/{{properCase name}}.vue`,
				templateFile: `${plopDirectory}/templates/component.hbs`,
			}];
		} 
	};
};
