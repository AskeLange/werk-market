

module.exports = function global (srcDirectory, plopDirectory) {
	return {
		description: 'Generates a .npmrc file.',
		prompts: [
			{	
				type: 'input',
				name: 'token',
				message: 'Provide your GitHub acces token.',
			},
		],

		actions() {
			return [{
				type: 'add',
				path: `${srcDirectory}/.npmrc`,
				templateFile: `${plopDirectory}/templates/npmrc.hbs`,
			}];
		} 
	};
};
