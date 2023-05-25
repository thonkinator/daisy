<script lang="ts">
	import { page } from "$app/stores";
	import ListSection from "@/ListSection.svelte";
	export let data;

	// needs to be reactive or the page doesn't navigate right for some reason
	$: group = data.groups.find((group: any) => group.name == $page.params.group);
	$: policies = group.policies
		.map((name: string) => data.policies.find((policy: any) => policy.name == name))
		.filter((p: any) => p);
</script>

<svelte:head>
	<title>Daisy &mdash; {group.caption}</title>
</svelte:head>

<h1>{group.caption}</h1>

{#each group.desc.split(/(?:\n){1,2}\s+/) as paragraph}
	<p>{paragraph}</p>
{/each}

{#each policies as policy (policy.name)}
	<ListSection
		id={policy.name}
		href="/{data.lang.code}/{group.name}#{policy.name}"
		title={policy.name}
		sub={policy.caption}
		desc={policy.desc}
	/>
{/each}
