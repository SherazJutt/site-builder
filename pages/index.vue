<script setup>
const { state, page, load } = useBuilderPage();
await load();

const setComponent = (component, index) => {
	state.value.activeComponentIndex = index;
};
</script>
<template>
	<div class="rounded-md border h-[calc(100vh-80px)] overflow-auto p-2" @click.self="state.activeComponentIndex = null">
		<!-- show components based on the builder page array -->
		<template v-for="(component, index) in page" :key="index" v-if="page.length">
			<div class="hover:bg-primary/5 group relative hover:outline-primary/40 outline outline-transparent duration-100 border-transparent" @click="setComponent(component, index)">
				<!-- <div class="absolute group-hover:flex hidden left-0 right-0 justify-center items-center top-0 mx-auto w-fit px-4 border rounded-full h-8 gap-1 bg-primary text-white">
					<UIcon
				</div> -->
				<PageHeading v-if="component.name === 'heading'" :customizations="component.customizations" :content="component.content" />
				<PageParagraph v-if="component.name === 'paragraph'" :customizations="component.customizations" :content="component.content" />
				<PageHero v-if="component.name === 'hero'" :content="component.content" :customizations="component.customizations" />
			</div>
		</template>

		<!-- show empty message -->
		<div class="my-6 text-center" v-else>No components added yet</div>

		<!-- <hr class="mt-8" /> -->

		<!-- raw data -->
		<!-- <pre>{{ state }}</pre> -->
		<!-- <pre>{{ page[state.activeComponentIndex] }}</pre> -->
	</div>
</template>
