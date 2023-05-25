<script lang="ts">
	export let id: string;
	export let href: string;
	export let title: string;
	export let sub: string;
	export let desc: string;
</script>

<article>
	<h2 {id}>
		<a class="href" {href}>{title}</a>
	</h2>
	<p class="sub">{sub}</p>
	{#each desc.split(/(?:\n){1,2}\s+/g) as paragraph}
		<p>{paragraph}</p>
	{/each}
</article>

<style>
	h2 {
		margin-top: 1.5rem;
		width: max-content;
	}
	h2 a {
		text-decoration: underline transparent;
		transition: text-decoration 0.3s ease;
	}
	h2 a:hover {
		text-decoration: underline var(--bd);
	}
	p {
		padding: 0.5rem 0;
	}
	.sub {
		margin-top: -1rem;
		color: var(--sub);
	}
</style>
