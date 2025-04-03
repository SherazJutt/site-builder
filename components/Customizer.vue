<script setup>
const { state, page } = useBuilderPage();
const { textSizes, textStyles, headings, textWeights } = staticData();
</script>

<template>
	<div class="px-3.5 py-2 flex justify-between items-center">
		<h2 class="text-primary text-base">Customizations</h2>
		<UButton icon="i-tabler:arrow-right" class="text-xl cursor-pointer" variant="ghost" color="neutral" @click="state.activeComponentIndex = null" />
	</div>

	<div class="space-y-2 border-t">
		<UAccordion :ui="{ trigger: 'px-3.5 hover:bg-primary/5', content: 'px-3.5 pb-3.5', item: 'last:border-b' }" :items="page[state.activeComponentIndex]?.customizer">
			<template #leading="{ item }">
				<UIcon :name="item.category === 'content' ? 'fluent:content-view-32-regular' : item.category === 'customizations' ? 'hugeicons:customize' : ''" size="20" />
			</template>
			<template #content="{ item: currItem }">
				<template v-for="(item, index) in currItem.items" :key="index">
					<!-- select -->
					<div v-if="item.component === 'select'">
						<h3 :class="{ 'mt-0': index === 0 }" class="my-2 text-sm">{{ item.label }}</h3>
						<div class="flex items-center gap-1">
							<USelect v-model="page[state.activeComponentIndex][currItem.category][item.ref]" class="w-full" placeholder="Select" :items="item.type === 'heading' ? headings : item.type === 'size' ? textSizes : item.type === 'style' ? textStyles : item.type === 'weight' ? textWeights : []" />
							<UPopover mode="click">
								<UButton icon="i-famicons:options-outline" color="neutral" variant="soft" />

								<template #content>
									<div class="p-2">
										<UButton label="Reset" variant="soft" color="error" @click="page[state.activeComponentIndex][currItem.category][item.ref] = item.default || ''" />
									</div>
								</template>
							</UPopover>
						</div>
					</div>
					<!-- input -->
					<div v-if="item.component === 'input'">
						<h3 :class="{ 'mt-0': index === 0 }" class="my-2 text-sm">{{ item.label }}</h3>
						<div class="flex items-center gap-1">
							<UInput v-model="page[state.activeComponentIndex][currItem.category][item.ref]" class="w-full" placeholder="Enter text" />
							<UPopover mode="click">
								<UButton icon="i-famicons:options-outline" color="neutral" variant="soft" />

								<template #content>
									<div class="p-2">
										<UButton label="Reset" variant="soft" color="error" @click="page[state.activeComponentIndex][currItem.category][item.ref] = item.default || ''" />
									</div>
								</template>
							</UPopover>
						</div>
					</div>
				</template>
			</template>
		</UAccordion>

		<!-- <pre>{{ page[state.activeComponentIndex]?.customizer }}</pre> -->
	</div>
</template>
