<script setup>
useSeoMeta({ title: "Page Builder | Wodwes" });
const { state } = useApp();
const { state: builderState, page, save } = useBuilderPage();
</script>

<template>
	<nav class="relative flex h-[64px] w-full items-center justify-between self-center border-b pr-8 pl-4">
		<div class="flex items-center gap-4">
			<UButton icon="i-quill:hamburger-sidebar" class="hiddenmd:block cursor-pointer p-1" size="md" color="primary" variant="soft" :ui="{ leadingIcon: 'size-6' }" @click="state.showSidebar = !state.showSidebar" />
			<div class="text-lg text-gray-700">Page builder</div>
		</div>

		<div class="flex items-center gap-4">
			<UButton icon="i-lucide-lab:save" @click="save" />
			<UAvatar icon="i-lucide-image" size="xl" />
		</div>
	</nav>

	<main class="overflow-hidden relative">
		<div :class="state.showSidebar ? 'left-0' : '-left-full'" class="absolute w-[260px] z-10 top-0 bottom-0 border-r bg-white duration-200">
			<Sidebar />
		</div>
		<div :class="[state.showSidebar ? 'xl:pl-[268px] ' : 'pl-2 ', builderState.activeComponentIndex !== null ? '4xl:pr-[268px]' : '4xl:pr-2']" class="h-full duration-200 w-full p-2">
			<slot />
		</div>
		<div :class="builderState.activeComponentIndex !== null ? 'right-0' : '-right-full'" class="z-10 shadow-xl w-[260px] absolute top-0 bottom-0 border-l bg-white duration-200">
			<!-- customizer tab where we show the customizations of the selected component -->
			<Customizer />
		</div>
	</main>
</template>
