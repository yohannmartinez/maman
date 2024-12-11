<script lang="ts">
	export let actualRating;
	const dashes = Array.from({ length: 150 });
</script>

<div
	class="absolute flex h-[100px] gap-[6.32px]"
	style="left: -{actualRating.characterIndex * 100}px; transition: left 0.5s ease-in-out"
>
	{#each dashes as _}
		<div
			class="h-[100px] w-[2px] flex-none bg-black"
			style="background: linear-gradient(180deg, #C6C6C6 0%, #C7C7C7 59.5%, #FFFFFF 100%)"
		></div>
	{/each}
</div>
