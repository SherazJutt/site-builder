export default function () {
	const heading = {
		name: "heading",
		content: { text: "Enter heading text" },
		customizations: { level: 1, size: "text-2xl", weight: "font-semibold", style: "font-style-none" },
		customizer: [
			{
				category: "content",
				label: "Content",
				items: [{ component: "input", type: "text", label: "Text", ref: "text" }],
			},
			{
				category: "customizations",
				label: "Customizations",
				items: [
					{ component: "select", type: "heading", label: "Level", default: 1, ref: "level" },
					{ component: "select", type: "size", label: "Size", ref: "size" },
					{ component: "select", type: "weight", label: "Weight", ref: "weight" },
					{ component: "select", type: "style", label: "Style", ref: "style" },
				],
			},
		],
	};

	const paragraph = {
		name: "paragraph",
		content: { text: "Enter paragraph text" },
		customizations: { size: "", weight: "", style: "" },
		customizer: [
			{
				category: "content",
				label: "Content",
				items: [{ component: "input", type: "text", label: "Text", ref: "text" }],
			},
			{
				category: "customizations",
				label: "Customizations",
				items: [
					{ component: "select", type: "size", label: "Size", ref: "size" },
					{ component: "select", type: "weight", label: "Weight", ref: "weight" },
					{ component: "select", type: "style", label: "Style", ref: "style" },
				],
			},
		],
	};

	const hero = {
		name: "hero",
		content: { heading: "Lorem ipsum dolor sit amet, consectetur.", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At perspiciatis nobis fugit, nisi, laboriosam repellat ex eum unde iure nihil voluptatum in odit illum adipisci velit autem dolorem." },
		customizations: { size: "", weight: "", style: "" },
		customizer: [
			{
				label: "Content",
				category: "content",
				items: [
					{ component: "input", type: "text", label: "Heading", ref: "heading" },
					{ component: "input", type: "text", label: "Description", ref: "description" },
				],
			},
			{
				category: "customizations",
				label: "Customizations",
				items: [
					{ component: "select", type: "size", label: "Size", ref: "size" },
					{ component: "select", type: "weight", label: "Weight", ref: "weight" },
					{ component: "select", type: "style", label: "Style", ref: "style" },
				],
			},
		],
	};

	return { heading, paragraph, hero };
}
