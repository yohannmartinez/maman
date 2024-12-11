<script lang="ts">
	import Slider from './components/slider.svelte';
	import Icon from '@iconify/svelte';
	import type { Rating } from '$lib/types/reviews';
	import { ratings } from './ratings';
	import { fade, fly } from 'svelte/transition';

	export let handleValidation;
	export let closeModal;
	let rate: number = 5;
	let container: EventTarget & HTMLDivElement;
	$: actualRating = ratings.find((rating: Rating) => rating.rate === rate) || ratings[0];

	const isCurrentRating = (rateToCompare: number): boolean => rateToCompare === rate;

	const alignButton = (rateButton: EventTarget & HTMLButtonElement): void => {
		const buttonRect = rateButton.getBoundingClientRect();
		const containerRect = container.getBoundingClientRect();
		const offset = buttonRect.left + buttonRect.width / 2 - containerRect.left;
		container.style.transform = `translateX(-${offset}px)`;
	};
</script>

<button
	class="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/20 backdrop-blur-sm"
	on:click={closeModal}
></button>

<div
	in:fly={{ y: 50, duration: 300 }}
	out:fly={{ y: 50, duration: 100 }}
	class="fixed left-1/2 top-1/2 h-fit w-[350px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-sm"
>
	<div class="absolute left-0 top-0 z-10 flex w-full justify-between p-4">
		<button
			on:click={closeModal}
			style="transition: box-shadow 0.2s ease-in-out"
			class="rounded-xl border border-[0.5px] border-black p-3 hover:text-white hover:[box-shadow:inset_0_50px_0_0_#000]"
			><Icon icon="tabler:arrow-left" />
		</button>
		<button
			on:click={handleValidation}
			style="transition: box-shadow 0.2s ease-in-out"
			class="rounded-xl border border-[0.5px] border-black p-3 hover:text-white hover:[box-shadow:inset_0_50px_0_0_#000]"
			><Icon icon="tabler:check" />
		</button>
	</div>
	<div
		class="relative h-[350px] overflow-hidden rounded-3xl"
		style="transition: background-color 0.5s ease-in-out; background-color: {actualRating?.background};"
	>
		<img
			src="/images/review.svg"
			style="transition: object-position 0.5s ease-in-out; object-position: -{actualRating?.characterIndex *
				350}px 0"
			class="pointer-events-none absolute bottom-0 h-[350px] object-cover object-[-0px_0]"
			alt=""
		/>
	</div>
	<div class="flex flex-col items-center justify-center py-8">
		<h1 class="max-w-60 text-center font-bigola text-3xl">Quel est votre avis</h1>
		<div class="relative mb-6 h-[100px] w-[300px] overflow-hidden">
			<Slider {actualRating} />
			<img
				src="/images/slider-overview.svg"
				class="z-2 pointer-events-none absolute left-0 left-1/2 top-0 h-full w-[300px] -translate-x-1/2 object-cover"
				alt=""
			/>

			<div
				style="transition: background-color 0.5s ease-in-out; background: linear-gradient(0deg, {actualRating
					?.gradients[0]} 0%, {actualRating?.gradients[1]} 100%)"
				class="absolute bottom-0 left-1/2 h-[78%] w-[3px] -translate-x-1/2 rounded-t-full bg-black"
			></div>
		</div>
		<div class="relative h-[55px]">
			<div
				bind:this={container}
				class="absolute flex translate-x-[-76px] flex-nowrap transition-transform duration-300"
			>
				{#each ratings as rating}
					<button
						bind:this={rating.buttonElement}
						style="background: {isCurrentRating(rating.rate) && `${actualRating?.color}`}; 
							 color: {isCurrentRating(rating.rate) && `white`}; 
							 font-weight: {isCurrentRating(rating.rate) && '600'};
							 background: {isCurrentRating(rating.rate) &&
							`linear-gradient(90deg, ${actualRating?.gradients[0]} 0%, ${
								actualRating?.gradients[1]
							} 100%)`};
							 border: {isCurrentRating(rating.rate) && `1px solid white`}"
						class="mx-2 w-[140px] flex-none rounded-full border px-5 py-3 text-sm font-medium"
						on:click={(event) => {
							rate = rating.rate;
							alignButton(event.currentTarget);
						}}
					>
						{rating.label}
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
