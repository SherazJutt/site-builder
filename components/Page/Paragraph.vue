<script setup>
defineProps(["content", "customizations"]);
</script>
<template>
	<p :class="[Object.values(customizations)]">{{ content.text }}</p>
</template>
