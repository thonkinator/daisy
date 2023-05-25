<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { page } from "$app/stores";
	export let data;

	let main: HTMLElement;
	// see https://github.com/sveltejs/kit/issues/2733 & https://github.com/sveltejs/kit/pull/8723
	afterNavigate(({ type }) => {
		if (type != "enter") main.scrollTo(0, 0);
	});
</script>

<aside>
	<header>
		<h2><a href="/{$page.params.lang}">Daisy</a></h2>
	</header>
	<nav>
		{#each data.groups as group}
			<a href="/{$page.params.lang}/{group.name}">{group.caption}</a>
		{/each}
	</nav>
</aside>
<main bind:this={main}>
	<slot />
</main>

<style>
	aside {
		border-right: thin solid var(--bd);
		width: 20rem;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow-y: scroll;
		background-color: var(--bg);
	}
	header {
		padding: 0.75rem;
		border-bottom: thin solid var(--bd);
		position: sticky;
		top: 0;
		background-color: var(--bg);
	}
	h2 {
		font-size: 2rem;
		user-select: none;
	}
	nav {
		display: contents;
	}
	nav > a {
		padding: 0.5rem 0.75rem;
		text-decoration: underline;
	}
	nav > a:first-of-type {
		padding-top: 0.75rem;
	}
	nav > a:last-of-type {
		padding-bottom: 1rem;
	}
	main {
		padding: 2rem;
		line-height: 1.75;
		height: 100%;
		overflow-y: scroll;
		scroll-behavior: smooth;
		flex-grow: 1;
	}
</style>
