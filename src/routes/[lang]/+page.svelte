<script lang="ts">
	import ListSection from "@/ListSection.svelte";
	export let data;
</script>

<svelte:head>
	<title>Daisy</title>
</svelte:head>

<h1>Daisy</h1>
<p>A policy editor for Pollen/fakemurk.</p>

{#each data.groups as group (group.name)}
	<ListSection
		id={group.name}
		href="/{data.lang.code}/{group.name}"
		title={group.caption}
		sub={group.name}
		desc={group.desc}
	/>
{/each}
