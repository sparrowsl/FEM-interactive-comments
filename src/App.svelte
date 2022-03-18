<script>
	// Import Components
	import Comments from "./components/Comments.svelte";

	// Variables
	export let name = "Svelte";

	// Functions
</script>

<main>
	<Comments/>
</main>

<style>
	main {
		padding: 1em;
	}


	/* // Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
	}

	/* // Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
	}

	/* // Large devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		main {
			max-width: 1024px;
		}
	}

	/* // Extra large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
	}
</style>
