<script lang="ts">
	import { page } from "$app/stores";
	export let data;
</script>

<svelte:head>
	<title>Daisy</title>
</svelte:head>

<h1>Daisy</h1>
<p>A policy editor for Pollen/fakemurk.</p>

{#each data.groups as group (group.name)}
	<h2 id={group.name}>
		<a href="{$page.params.lang}/{group.name}">{group.caption}</a>
	</h2>
	{#each group.desc.split(/(?:\n\s*){1,2}/g) as paragraph}
		<p>{paragraph}</p>
	{/each}
{/each}

<style>
	p {
		padding: 0.5rem 0;
	}
	h2 {
		margin-top: 1.5rem;
	}
	h2 a {
		text-decoration: underline transparent;
		transition: text-decoration 0.3s ease;
	}
	h2 a:hover {
		text-decoration: underline var(--bd);
	}
</style>
