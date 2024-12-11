<script lang="ts">
	import Review from '$lib/components/review/review.svelte';
	let isOpened = false;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="border">
	<h1 class="mb-4 font-bigola text-3xl font-extrabold">test</h1>
	<button on:click={() => (isOpened = true)} aria-label="test">ouvrir</button>
</div>
{#if isOpened}
	<Review handleValidation={() => (isOpened = false)} closeModal={() => (isOpened = false)} />
{/if}
