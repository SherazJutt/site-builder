export default function () {
	const headings = [
		{ label: "H1", value: 1 },
		{ label: "H2", value: 2 },
		{ label: "H3", value: 3 },
		{ label: "H4", value: 4 },
		{ label: "H5", value: 5 },
		{ label: "H6", value: 6 },
	];

	const textSizes = [
		{ label: "Small", value: "text-sm" },
		{ label: "Medium", value: "text-base" },
		{ label: "Large", value: "text-lg" },
		{ label: "Extra Large", value: "text-xl" },
		{ label: "2XL", value: "text-2xl" },
		{ label: "3XL", value: "text-3xl" },
		{ label: "4XL", value: "text-4xl" },
		{ label: "5XL", value: "text-5xl" },
		{ label: "6XL", value: "text-6xl" },
		{ label: "7XL", value: "text-7xl" },
	];

	const textStyles = [
		{ label: "None", value: "font-style-none" },
		{ label: "Italic", value: "italic" },
		{ label: "Underline", value: "underline" },
	];

	const textWeights = [
		{ label: "Normal", value: "font-normal" },
		{ label: "Light", value: "font-light" },
		{ label: "Medium", value: "font-medium" },
		{ label: "Semi bold", value: "font-semibold" },
		{ label: "Bold", value: "font-bold" },
		{ label: "Extra bold", value: "font-extrabold" },
		{ label: "Extreme bold", value: "font-black" },
	];

	// return
	return { headings, textSizes, textStyles, textWeights };
}
