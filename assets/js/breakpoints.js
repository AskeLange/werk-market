/**
 *
 * Modified version of the '@limbo-frontend/screens' package written by
 * @author Limbo Works: Saul Hardman <sha@limbo.works>
 *
 */

/**
 *
 * Generates breakpoints and screens for use
 * in Tailwind configuration file.
 *
 * @author Limbo Works: Saul Hardman <sha@limbo.works>
 * @param {Object[]} values The screen sizes to configure
 * 		the breakpoints from. Can be given as an
 * 		array of pixel values, or an array of objects
 * 		in form of **{ px: 768, hasMin: true, hasMax: false }**.
 * @param {number} rootFontSize The base font size, used for
 * 		calculating em values.
 * @returns {{ screens, breakpoints }} An object containing
 * 		two arrays: screens and breakpoints.
 *
 */

module.exports = (values, customScreens = {}, rootFontSize = 16) => {
	let response = values.reduce(({ screens = {}, breakpoints = {} }, value) => {
		const {
			value: px,
			min: hasMin = true,
			max: hasMax = false,
		} = typeof value === 'number' ? { value } : value ?? {};

		if (!px) {
			throw new Error(`@assets/js/breakpoints: \`value\` required: ${value}`);
		}

		const em = px / rootFontSize;
		const minValue = `${em}em`;
		const maxValue = `${em - 0.01}em`;

		return {
			screens: {
				...screens,
				...(hasMin ? { [`>=${px}`]: minValue } : {}),
				...(hasMax ? { [`<${px}`]: maxValue } : {}),
			},

			breakpoints: {
				...breakpoints,
				[`${px}`]: {
					px,
					em,
					min: minValue,
					max: maxValue,
				},
			},
		};
	});

	response.screens = { ...response.screens, ...customScreens };
	return response;
};
