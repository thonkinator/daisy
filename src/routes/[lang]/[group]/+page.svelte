<script lang="ts">
	import { page } from "$app/stores";
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
	<article>
		<h2 id={policy.name}>
			<a href="{$page.url.pathname}#{policy.name}">{policy.name}</a>
		</h2>
		<div class="desc">
			{#each policy.desc.split(/(?:\n){1,2}\s+/g) as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
		<div class="edit" />
	</article>
{/each}

<style>
	p {
		padding: 0.5rem 0;
	}
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto;
		grid-template-areas:
			"h2 h2"
			"desc edit";
	}
	h2 {
		margin-top: 1.5rem;
		scroll-margin-top: 1.25rem;
		grid-area: h2;
	}
	h2 a {
		text-decoration: underline transparent;
		transition: text-decoration 0.3s ease;
	}
	h2:target a,
	h2 a:hover {
		text-decoration: underline var(--bd);
	}
	.desc {
		grid-area: desc;
	}
	.edit {
		grid-area: edit;
	}
</style>
