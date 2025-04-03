<script setup>
defineProps(["content", "customizations"]);
</script>
<template>
	<component :is="'h' + customizations.level" :class="[Object.values(customizations)]">{{ content.text }}</component>
</template>
