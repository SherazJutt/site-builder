export function useBuilderPage() {
	const { $pb } = useNuxtApp();
	const toast = useToast();
	const getComponent = pageComponents();

	// page state
	const state = useState("BuilderPageState", () => ({
		activeComponentIndex: null,
	}));

	// page data
	const page = useState("BuilderPageData", () => []);

	// add component to page
	const addComponent = (component) => {
		const CurrComponent = getComponent[component]; // Access the component dynamically

		if (CurrComponent) {
			// Clone the object to create a unique instance
			const newComponent = JSON.parse(JSON.stringify(CurrComponent));
			// Push the new component to the page
			page.value.push(newComponent);

			toast.add({ description: `${newComponent.name.charAt(0).toUpperCase() + newComponent.name.slice(1)} has been added to the page`, icon: "i-lucide:check" });
		} else {
			toast.add({ description: "Error: Component does not exist", icon: "i-lucide:cross" });
		}
	};

	const load = async () => {
		try {
			const res = await $pb.collection("pages").getOne("v08v1l61xi5j2j5");
			page.value = res.json;
			// console.log(res);
		} catch (error) {
			console.log(error.data);
		}
	};

	const save = async () => {
		try {
			const res = await $pb.collection("pages").update("v08v1l61xi5j2j5", { json: page.value });
			console.log(res);
		} catch (error) {
			console.log(error.data);
		}
	};

	return { state, page, addComponent, save, load };
}
